import Cookies from "js-cookie";
import { useEffect } from "react";

const token = Cookies.get("token")
const initialState = {
    username: '',
    email: '',
    description: ''
}
useEffect(() => {
    async function fetchData() {

        const sendData = {
            method: "GET",
            headers: {
                Authorization: `Bearer ${token}`
            }
        }
        setData(await useFetch("http://localhost:1337/users/me", sendData))
    }

   const data = fetchData()
}, [])

const reducer = (state = initialState)