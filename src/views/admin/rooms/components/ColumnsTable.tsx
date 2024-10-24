import { Flex, Box, Table, Button, Icon, Tbody, Td, Text, Th, Thead, Tr, useColorModeValue } from '@chakra-ui/react';
import * as React from 'react';
import {
  createColumnHelper,
  flexRender,
  getCoreRowModel,
  getSortedRowModel,
  SortingState,
  useReactTable,
} from '@tanstack/react-table';

import { MdDelete, MdEdit } from 'react-icons/md';
import { DeleteRoom, Room } from 'api/rooms';

const handleDeleteRoom = async (id: string) => {
	if (window.confirm("Are you sure you want to delete this room?")) {
		await DeleteRoom(id);
		// Optionally refresh the data or the page
		window.location.reload(); // This will refresh the page after deletion
	}
};

const columnHelper = createColumnHelper<Room>();

export default function ColumnTable(props: { tableData: Room[] }) {
  const { tableData } = props;
  const [sorting, setSorting] = React.useState<SortingState>([]);
  const [data, setData] = React.useState<Room[]>([]); // Initialize state as an empty array
  
  const textColor = useColorModeValue('secondaryGray.900', 'white');
  const borderColor = useColorModeValue('gray.200', 'whiteAlpha.100');
  const deleteButtonColor = useColorModeValue('red.500', 'red.500');

  // Update data whenever tableData prop changes
  React.useEffect(() => {
    if (tableData && Array.isArray(tableData)) {
      setData(tableData); // Ensure tableData is an array
    }
  }, [tableData]);

  const columns = [
    columnHelper.accessor('RoomName', {
      id: 'RoomName',
      header: () => (
        <Text
          justifyContent="space-between"
          align="center"
          fontSize={{ sm: '10px', lg: '12px' }}
          color="gray.400">
          Room
        </Text>
      ),
      cell: (info: any) => (
        <Flex align="center">
          <Text color={textColor} fontSize="sm" fontWeight="700">
            {info.getValue()}
          </Text>
        </Flex>
      ),
    }),
    columnHelper.accessor('Rows', {
      id: 'Rows',
      header: () => (
        <Text
          justifyContent="space-between"
          align="center"
          fontSize={{ sm: '10px', lg: '12px' }}
          color="gray.400">
          Rows
        </Text>
      ),
      cell: (info) => (
        <Text color={textColor} fontSize="sm" fontWeight="700">
          {info.getValue()+""}
        </Text>
      ),
    }),
    columnHelper.accessor('Columns', {
      id: 'Columns',
      header: () => (
        <Text
          justifyContent="space-between"
          align="center"
          fontSize={{ sm: '10px', lg: '12px' }}
          color="gray.400">
          Columns
        </Text>
      ),
      cell: (info) => (
        <Text color={textColor} fontSize="sm" fontWeight="700">
          {info.getValue()+""}
        </Text>
      ),
    }),
    columnHelper.accessor('id', {
      id: 'id',
      header: () => (
        <Text
          justifyContent="space-between"
          align="center"
          fontSize={{ sm: '10px', lg: '12px' }}
          color="gray.400">
          Operation
        </Text>
      ),
      cell: (info) => (
        <>
          <Button color={textColor}>
            <Icon as={MdEdit}></Icon>
          </Button>
          <Button paddingLeft={5} color={deleteButtonColor} onClick={() => handleDeleteRoom(info.getValue())}>
            <Icon as={MdDelete}></Icon>
          </Button>
        </>
      ),
    }),
  ];

  const table = useReactTable({
    data,
    columns,
    state: { sorting },
    onSortingChange: setSorting,
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
  });

  return (
    <Box w="100%" overflowX={{ sm: 'scroll', lg: 'hidden' }}>
      <Flex px="25px" mb="8px" justifyContent="space-between" align="center">
        <Text color={textColor} fontSize="22px" fontWeight="700" lineHeight="100%">
          Rooms
        </Text>
      </Flex>
      <Table variant="simple" color="gray.500">
        <Thead>
          {table.getHeaderGroups().map((headerGroup) => (
            <Tr key={headerGroup.id}>
              {headerGroup.headers.map((header) => (
                <Th
                  key={header.id}
                  borderColor={borderColor}
                  onClick={header.column.getToggleSortingHandler()}>
                  <Flex justifyContent="space-between" align="center" fontSize={{ sm: '10px', lg: '12px' }} color="gray.400">
                    {flexRender(header.column.columnDef.header, header.getContext())}
                    {{ asc: '↑', desc: '↓' }[header.column.getIsSorted() as string] ?? null}
                  </Flex>
                </Th>
              ))}
            </Tr>
          ))}
        </Thead>
        <Tbody>
          {table.getRowModel().rows.slice(0, 11).map((row) => (
            <Tr key={row.id}>
              {row.getVisibleCells().map((cell) => (
                <Td key={cell.id} borderColor="transparent">
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </Td>
              ))}
            </Tr>
          ))}
        </Tbody>
      </Table>
    </Box>
  );
}