import axios from "axios";

export type User = {
	id: string;
	Name: string;
	Username: string;
	Password: string;
    Email: string;
    Role: string;
    Year: Number;
    Branch: string;
    Section: string;
    Department: string;
};


export async function GetAllUsers(): Promise<User[]> {
    const url = process.env.REACT_APP_LES_API_URL + "/v1/users/";
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
        console.error("Error fetching users:", error);
        return null; // Return null if there's an error
    }
}

export function DeleteUser(id: string) {
    const url = process.env.REACT_APP_LES_API_URL + "/v1/users/" + id
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
