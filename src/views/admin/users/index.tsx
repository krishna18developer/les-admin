
import React, { useEffect, useState } from 'react';

// Chakra imports
import { Box, SimpleGrid } from '@chakra-ui/react';
import { GetAllUsers, User } from 'api/users';
import ColumnsTable from 'views/admin/users/components/ColumnsTable'

export default function UsersPage() {
	// Chakra Color Mode
	const [users, setUsers] = useState<User[]>([]);

    useEffect(() => {
        const fetchQuestions = async () => {
            const result = await GetAllUsers();
            setUsers(result || []);
            console.log("Questions fetched:", result);
        };

        fetchQuestions();
    }, []);


	return (
		<Box pt={{ base: '180px', md: '80px', xl: '80px' }}>
		<SimpleGrid mb='20px' >
			<ColumnsTable tableData={users.length ? users : []} />
		</SimpleGrid>
		</Box>
	);
}
