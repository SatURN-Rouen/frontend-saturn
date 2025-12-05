import axios from "axios";

export class AuthService {

    private token?: string
    private readonly login: string
    private readonly password: string

    constructor(login: string, password: string) {
        this.login = login
        this.password = password
        this.token = undefined
    }

    async authenticate() {
        const res = await axios.post("http://localhost:8080/api/v1/auth/signin", {
            "username": this.login,
            "password": this.password
        }, {
            headers: {
                "Content-Type": "application/json"
            }
        })
        this.token = res.data as string
    }

    getToken() {
        return this.token
    }
}