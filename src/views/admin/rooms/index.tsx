// Chakra imports
import { Box, SimpleGrid } from '@chakra-ui/react';
import ColumnsTable from 'views/admin/rooms/components/ColumnsTable'
import { useEffect, useState } from 'react';
import { GetAllRooms, Room } from 'api/rooms';

export default function RoomsPage() {
	const [rooms, setRooms] = useState<Room[]>([]);

    useEffect(() => {
        const fetchRooms = async () => {
            const result = await GetAllRooms();
            setRooms(result || []);
            console.log("Subjects fetched:", result);
        };

        fetchRooms();
    }, []);

	// Chakra Color Mode
	return (
		<Box pt={{ base: '130px', md: '80px', xl: '80px' }}>
			<SimpleGrid mb='20px' >
				<ColumnsTable tableData={rooms.length ? rooms : []} />
			</SimpleGrid>
		</Box>
	);
}
