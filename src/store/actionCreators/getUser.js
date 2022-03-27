import axios from 'axios'
import { setUser } from "../reducers/userReducer"
// 5 // 
export const getUser = () => (dispatch) => {
    axios         // отправляем запрос , указывая наш session_id 
        .get(
            `https://api.themoviedb.org/3//account/new?api_key=f0d7e41686782ec02dbe7d4d333bce05&session_id=${localStorage.getItem("sessionId")}`
        )
        .then((responce) => {    // получаем объект, содержащий информацию о пользователе
            dispatch(setUser(responce.data)) // пушим его в редакс 
        })
}

export default getUser
