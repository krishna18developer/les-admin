import axios from "axios";

export type Computer = {
    SystemNumber: Number;
    IsWorking: boolean;
};

export type Room = {
	id: string;
	RoomName: string;
	Department: string; 
	Rows: Number; 
	Columns: Number; 
	Computers: Computer[][]; 
};


export async function GetAllRooms(): Promise<Room[]> {
    const url = process.env.REACT_APP_LES_API_URL + "/v1/rooms/";
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
        console.error("Error fetching rooms:", error);
        return null; // Return null if there's an error
    }
}

export function DeleteRoom(id: string) {
    const url = process.env.REACT_APP_LES_API_URL + "/v1/rooms/" + id
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
