// Chakra imports
import { Box, SimpleGrid, Table } from '@chakra-ui/react';
import ColumnsTable from 'views/admin/subjects/components/ColumnsTable'
import { useEffect, useState } from 'react';
import { GetAllSubjects, Subject } from 'api/subjects';

export default function SubjectsPage() {
	const [subjects, setSubjects] = useState<Subject[]>([]);

    useEffect(() => {
        const fetchSubjects = async () => {
            const result = await GetAllSubjects();
            setSubjects(result || []);
            console.log("Subjects fetched:", result);
        };

        fetchSubjects();
    }, []);

	// Chakra Color Mode
	return (
		<Box pt={{ base: '130px', md: '80px', xl: '80px' }}>
			<SimpleGrid mb='20px' >
				<ColumnsTable tableData={subjects.length ? subjects : []} />
			</SimpleGrid>
		</Box>
	);
}
