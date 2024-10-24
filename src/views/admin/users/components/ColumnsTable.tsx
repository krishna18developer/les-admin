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
import { DeleteUser, User } from 'api/users';

const handleDeleteQuestion = async (id: string) => {
	if (window.confirm("Are you sure you want to delete this question?")) {
		await DeleteUser(id);
		window.location.reload();
	}
};

const columnHelper = createColumnHelper<User>();

export default function ColumnTable(props: { tableData: User[] }) {
  const { tableData } = props;
  const [sorting, setSorting] = React.useState<SortingState>([]);
  const [data, setData] = React.useState<User[]>([]); 
  const textColor = useColorModeValue('secondaryGray.900', 'white');
  const borderColor = useColorModeValue('gray.200', 'whiteAlpha.100');
  const deleteButtonColor = useColorModeValue('red.500', 'red.500');

  React.useEffect(() => {
    if (tableData && Array.isArray(tableData)) {
      setData(tableData);
    }
  }, [tableData]);

  const columns = [
    columnHelper.accessor('Username', {
      id: 'Username',
      header: () => (
        <Text
          justifyContent="space-between"
          align="center"
          fontSize={{ sm: '10px', lg: '12px' }}
          color="gray.400">
          Username
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
    columnHelper.accessor('Name', {
      id: 'Name',
      header: () => (
        <Text
          justifyContent="space-between"
          align="center"
          fontSize={{ sm: '10px', lg: '12px' }}
          color="gray.400">
          Name
        </Text>
      ),
      cell: (info) => (
        <Text color={textColor} fontSize="sm" fontWeight="700">
          {info.getValue()}
        </Text>
      ),
    }),
    columnHelper.accessor('Year', {
      id: 'Year',
      header: () => (
        <Text
          justifyContent="space-between"
          align="center"
          fontSize={{ sm: '10px', lg: '12px' }}
          color="gray.400">
          Year
        </Text>
      ),
      cell: (info) => (
        <Text color={textColor} fontSize="sm" fontWeight="700">
          {info.getValue()+""}
        </Text>
      ),
    }),
    columnHelper.accessor('Department', {
      id: 'Department',
      header: () => (
        <Text
          justifyContent="space-between"
          align="center"
          fontSize={{ sm: '10px', lg: '12px' }}
          color="gray.400">
          Department
        </Text>
      ),
      cell: (info) => (
        <Text color={textColor} fontSize="sm" fontWeight="700">
          {info.getValue()+""}
        </Text>
      ),
    }),
    columnHelper.accessor('Branch', {
      id: 'Branch',
      header: () => (
        <Text
          justifyContent="space-between"
          align="center"
          fontSize={{ sm: '10px', lg: '12px' }}
          color="gray.400">
          Branch
        </Text>
      ),
      cell: (info) => (
        <Text color={textColor} fontSize="sm" fontWeight="700">
          {info.getValue()+""}
        </Text>
      ),
    }),
    columnHelper.accessor('Section', {
      id: 'Section',
      header: () => (
        <Text
          justifyContent="space-between"
          align="center"
          fontSize={{ sm: '10px', lg: '12px' }}
          color="gray.400">
          Section
        </Text>
      ),
      cell: (info) => (
        <Text color={textColor} fontSize="sm" fontWeight="700">
          {info.getValue()+""}
        </Text>
      ),
    }),
    columnHelper.accessor('Role', {
      id: 'Role',
      header: () => (
        <Text
          justifyContent="space-between"
          align="center"
          fontSize={{ sm: '10px', lg: '12px' }}
          color="gray.400">
          Role
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
          <Button paddingLeft={5} color={deleteButtonColor} onClick={() => handleDeleteQuestion(info.getValue())}>
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
          Users
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