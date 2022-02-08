import axios from 'axios'
import getUser from "./getUser"

// http://localhost:3000/login?request_token=4bef194f0cdf7573052fd4b0585fa88faee43782&approved=true // 
// 4// 
                        // берём токен // 
export const successfulAuth = (token) => (dispatch) => { 
    axios
        .post(      
            `https://api.themoviedb.org/3/authentication/session/new?api_key=f0d7e41686782ec02dbe7d4d333bce05`,
            {
                request_token: token       // отправляем токен // 
            }
        )    // после отправки токена приходит объект // 
        .then((responce) => {
                                        // елси поле  success = true (логин произошёл успешно), то пушим session_id в localstorage)
            if (responce.data.success) {
                localStorage.setItem("sessionId", responce.data.session_id)
                dispatch(getUser())
            }
        })



}

export default successfulAuth




