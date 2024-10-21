import api from "./api";

export type Exam = {
	id: string;
	Difficulty: number;
	QuestionTitle: string;
	QuestionDescription: string; 
};


export async function GetAllExams(): Promise<Exam[]> {
    try {
        const response = await api.get("url", {
            headers: {
                Authorization: localStorage.getItem("token") || ''
            },
        });
        
        console.log(response.data.Data); // Log the fetched data
        return response.data.Data; // Return the questions array

    } catch (error) {
        console.error("Error fetching questions:", error);
        return null; // Return null if there's an error
    }
}

export function DeleteExam(id: string) {
    api.delete("url", {
        headers: {
            Authorization: localStorage.getItem("token")
        },
      })
      .then(({data}) => {
        console.log(data);
    }).catch(() => {
    }) 
}
