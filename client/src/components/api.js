import axios from "axios"
import { hostserver } from "../host";

export async function handleLogin(form) {
    return axios.post(`${hostserver}/login`, form)
        .then((res) => {
            return res.response
        }).catch((error) => {
            return error
        })
}

export async function Signup() {
    return axios.post(`${hostserver}/register`, form)
        .then((res) => {
            return res.response
        }).catch((error) => {
            console.log(error);
        })
}

export async function Users() {
    return axios.get(`${hostserver}/get/all/user`)
        .then((res) => {
            return res
        }).catch((error) => {
            return error
        })
}