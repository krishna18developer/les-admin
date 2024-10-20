import axios from "axios";

export type Exam = {
	id: string;
	Difficulty: number;
	QuestionTitle: string;
	QuestionDescription: string; 
};


export async function GetAllExams(): Promise<Exam[]> {
    const url = process.env.REACT_APP_LES_API_URL + "/v1/exams/";
    console.log(url);

    try {
        const response = await axios.get(url, {
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
    const url = process.env.REACT_APP_LES_API_URL + "/v1/exams/" + id
    console.log(url)

    axios.delete(url, {
        headers: {
            Authorization: localStorage.getItem("token")
        },
      })
      .then(({data}) => {
        console.log(data);
    }).catch(() => {
    }) 
}
