import api from "./api";

export type TestCase = {
	Input:  string;
	Output: string;
	Hidden: boolean;
}
export type Question = {
	id: string;
	Difficulty: number;
	QuestionTitle: string;
	QuestionDescription: string;
	TestCases: TestCase[];   
};

export async function GetAllQuestions(): Promise<Question[]> {
    try {
        const response = await api.get("/v1/questions/", {
            headers: {
                Authorization: localStorage.getItem("token")
            }
        });
        
        console.log(response.data.Data); // Log the fetched data
        return response.data.Data; // Return the questions array

    } catch (error) {
        console.error("Error fetching questions:", error);
        return null; // Return null if there's an error
    }
}

export function DeleteQuestion(id: string) {
    api.delete("/v1/questions/" + id, {
        headers: {
            Authorization: localStorage.getItem("token")
        },
      })
      .then(({data}) => {
        console.log(data);
    }).catch(() => {
    }) 
}
