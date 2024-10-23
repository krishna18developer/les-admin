// Chakra imports
import { Box, SimpleGrid, Table } from '@chakra-ui/react';
import ColumnsTable from 'views/admin/questions/components/ColumnsTable'
import { useEffect, useState } from 'react';
import { GetAllQuestions, Question } from 'api/questions';

export default function QuestionsPage() {
	const [questions, setQuestions] = useState<Question[]>([]);

    useEffect(() => {
        const fetchQuestions = async () => {
            const result = await GetAllQuestions();
            setQuestions(result || []);
            console.log("Questions fetched:", result);
        };

        fetchQuestions();
    }, []);

	// Chakra Color Mode
	return (
		<Box pt={{ base: '130px', md: '80px', xl: '80px' }}>
			<SimpleGrid mb='20px' >
				<ColumnsTable tableData={questions.length ? questions : []} />
			</SimpleGrid>
		</Box>
	);
}
