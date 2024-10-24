// Chakra imports
import { Box, Heading, SimpleGrid, Table, Code  } from '@chakra-ui/react';
import ColumnsTable from 'views/admin/exams/components/ColumnsTable'
import { useEffect, useState } from 'react';
import { Exam, GetAllExams } from 'api/exams';

export default function MonitorExamPage() {
	const [exams, setExams] = useState<Exam[]>([]);

    useEffect(() => {
        const fetchExams = async () => {
            const result = await GetAllExams();
            setExams(result || []);
            console.log("Exams fetched:", result);
        };

        fetchExams();
    }, []);

    const exam_id = window.location.pathname.replace("/admin/exams/monitor/", "")
	// Chakra Color Mode
	return (
        <>
        <Box>
		    <SimpleGrid mb='120px' >
                <div style={{display: 'flex',justifyContent: 'center',alignItems: 'center',height: '100vh'}}>
                    <Heading className='center'>Monitoring Exam - {exam_id}</Heading>
                </div>
		    </SimpleGrid>
		</Box>

        </>
	);
}
