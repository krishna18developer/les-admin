import axios from "axios";

export function Login(Username: string, Password: string) {
    const url = process.env.REACT_APP_LES_API_URL + "/v1/auth/login/";
    console.log(url);
    axios.post(url, {
        body: {Username: Username, Password: Password},
        headers: {
            Authorization: localStorage.getItem("token"),
            "Content-Type": "application/json"
        },
      })
      .then(({data}) => {
        console.log(data);
    }).catch(() => {
    }) 
}
