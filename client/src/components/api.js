import axios from "axios"
import { hostserver } from "../host";

export async function handleLogin(form) {
    return axios.post(`${hostserver}/login`, form)
        .then((res) => {
            console.log(res, "user response");
        }).catch((error) => {
            console.log(error);
        })
}

export async function Signup() {
    return axios.post(`${hostserver}/login`)
        .then((res) => {
            console.log(res, "user response");
        }).catch((error) => {
            console.log(error);
        })
}

export async function Users() {
    return axios.get(`${hostserver}/users`)
        .then((res) => {
            console.log(res, "user response");
        }).catch((error) => {
            console.log(error);
        })
}