import React, { useEffect } from "react"
import { useDispatch } from "react-redux"
import useQuery from "./hooks/useQuery"
import successfulAuth from "./store/actionCreators/successfulAuth"
import { Redirect } from "react-router-dom"
// 3 //
// тут мы берём токен и проверяем успешность логина , с помощью url адреса 
export default function Login() {
    const query = useQuery()                    // после редеректа с tmdb появляется либо 
    const dispatch = useDispatch()            //http://localhost:3000/login?request_token=1feb6dc5e0c102af5c63aa53fda7aa9c00821285&approved=true 
                                               // либо  
    useEffect(() => {                         //http://localhost:3000/login?request_token=4ccbe4bfa06ec3f5510ae2c27e6f9853d8680bf8&denied=true                 
        if (query.get("approved")) {          // если approved=true , то мы берём из адреса значение request_token`a и передаём его в метод sucAuth
            dispatch(successfulAuth(query.get("request_token")))
        }
    }, [])
    return (
        <div className="loginCont">
            <Redirect to="/" />
        </div>
    )
}
