import axios from "axios";

export type Report = {
	id: string;
	Difficulty: number;
	QuestionTitle: string; 
};


export async function GetAllReports(): Promise<Report[]> {
    const url = process.env.REACT_APP_LES_API_URL + "/v1/reports/";
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

export function DeleteReport(id: string) {
    const url = process.env.REACT_APP_LES_API_URL + "/v1/reports/" + id
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
