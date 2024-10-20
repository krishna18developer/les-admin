// Chakra imports
import { Box, SimpleGrid, Table } from '@chakra-ui/react';
import DevelopmentTable from 'views/admin/dataTables/components/DevelopmentTable';
import CheckTable from 'views/admin/dataTables/components/CheckTable';
import ColumnsTable from 'views/admin/questions/components/ColumnsTable'
import ComplexTable from 'views/admin/dataTables/components/ComplexTable'; 
import { useEffect, useState } from 'react';
import { GetAllQuestions, Question } from 'api/questions';

const sampleQuestions: Question[] = [
	{
		id:"6704e3c7d7bad24da40dc95e",
		Difficulty:2,
		QuestionTitle: "Sum of Two Numbers",
		QuestionDescription: "Find Sum of two numbers",
		TestCases: [
			{
				Input:"2 3",
				Output: "5",
				Hidden: false
			}
		]
	},
]

export default function QuestionsPage() {
	const [questions, setQuestions] = useState<Question[]>([]);

    useEffect(() => {
        const fetchQuestions = async () => {
            const result = await GetAllQuestions(); // Assuming it's an async function
            setQuestions(result || []); // Update state with the fetched questions
            console.log("Questions fetched:", result);
        };

        fetchQuestions(); // Call the function to fetch data
    }, []); // Empty dependency array ensures this runs only once after the component mounts

	// Chakra Color Mode
	return (
		<Box pt={{ base: '130px', md: '80px', xl: '80px' }}>
			<SimpleGrid mb='20px' >
				<ColumnsTable tableData={questions.length ? questions : []} />
			</SimpleGrid>
		</Box>
	);
}
