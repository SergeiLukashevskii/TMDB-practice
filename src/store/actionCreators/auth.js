import axios from 'axios'
import { setToken } from '../reducers/testReducer'

//1//

export const auth = () => (dispatch) => {
    axios
        .get(              // получаем токен // 
            `https://api.themoviedb.org/3/authentication/token/new?api_key=f0d7e41686782ec02dbe7d4d333bce05`
        )
        .then((responce) => {         // пушим токен в редакс // 
            dispatch(setToken(responce.data.request_token)) // токен на мнгнование появляется в редаксе и служит для редиректа,после пропадает // 
           
            window.location.assign(`https://www.themoviedb.org/authenticate/${responce.data.request_token}?redirect_to=http://localhost:3000/login`)
        })  // отсылаем пользователя на tmdb, где он пытается залогинится , после чего его редеректит на мою страницу логина // 




}

export default auth




