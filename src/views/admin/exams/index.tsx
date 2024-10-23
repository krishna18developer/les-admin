// Chakra imports
import { Box, SimpleGrid, Table } from '@chakra-ui/react';
import ColumnsTable from 'views/admin/exams/components/ColumnsTable'
import { useEffect, useState } from 'react';
import { Exam, GetAllExams } from 'api/exams';

export default function ExamsPage() {
	const [exams, setExams] = useState<Exam[]>([]);

    useEffect(() => {
        const fetchExams = async () => {
            const result = await GetAllExams();
            setExams(result || []);
            console.log("Exams fetched:", result);
        };

        fetchExams();
    }, []);

	// Chakra Color Mode
	return (
		<Box pt={{ base: '130px', md: '80px', xl: '80px' }}>
			<SimpleGrid mb='20px' >
				<ColumnsTable tableData={exams.length ? exams : []} />
			</SimpleGrid>
		</Box>
	);
}
