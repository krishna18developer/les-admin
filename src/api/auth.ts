import api from "./api";
type LoginRequest = {
    Username: string;
    Password: string;
}
export async function Login(username: string, password: string) {
    const user: LoginRequest = {
        Username: username,
        Password: password
    }
        api.post("/v1/auth/login",JSON.stringify(user), {
            headers:{
                'Content-Type': 'application/json'
            }
        }).then(({data}) => {
            const token = data.Data.Token;
            if(token)
            {
                localStorage.setItem("token",token);
                window.location.href = "/";
            }}).catch(()=>{
                if(window.location.pathname !== '/auth/sign-in'){window.location.href = "/auth/sign-in";}
            });
}

export async function CheckIfLoggedIn(){
    api.post("/v1/auth/verify",{},{
        headers:{
            'Authorization' : `Bearer ${localStorage.getItem("token")}`
        }
    }).then(() => {
        console.log(window.location.pathname)
        if(window.location.pathname.startsWith('/admin') !== true){window.location.href = "/";}
    }).catch(()=>{
        if(window.location.pathname.startsWith('/auth')  !== true){window.location.href = "/auth/sign-in";}
    });
}