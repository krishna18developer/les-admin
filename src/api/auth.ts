import api from "./api";
type LoginRequest = {
    Username: string;
    Password: string;
}
export function Login(username: string, password: string) {
    const url = process.env.REACT_APP_LES_API_URL + "/v1/auth/login";
    console.log(url);
    const user: LoginRequest = {
        Username: username,
        Password: password
    }
    api.post("/v1/auth/login",JSON.stringify(user), {
        headers:{
            'Content-Type': 'application/json'
        }
    })
      .then(({data}) => {
        const token = data.Data.Token;
        localStorage.setItem("token",token);
    }).catch(() => {
    })

}
