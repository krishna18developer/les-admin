// Chakra imports
import { Box, SimpleGrid, Table } from '@chakra-ui/react';
import DevelopmentTable from 'views/admin/dataTables/components/DevelopmentTable';
import CheckTable from 'views/admin/dataTables/components/CheckTable';
import ColumnsTable from 'views/admin/questions/components/ColumnsTable'
import ComplexTable from 'views/admin/dataTables/components/ComplexTable'; 
import { useEffect, useState } from 'react';

type TestCase = {
	Input:  string;
	Output: string;
	Hidden: boolean;
}

type Question = {
	ID: string;
	Difficulty: number;
	QuestionTitle: string;
	QuestionDescription: string;
	TestCases: TestCase[];   
};


const sampleQuestions: Question[] = [
	{
		ID:"",
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
	const [questions, setQuestions] = useState<number>(0);

	
	// Chakra Color Mode
	return (
		<Box pt={{ base: '130px', md: '80px', xl: '80px' }}>
			<SimpleGrid mb='20px' >
				<ColumnsTable tableData={sampleQuestions} />
			</SimpleGrid>
		</Box>
	);
}
