import axios from 'axios'
import { setFoundFilm } from '../reducers/testReducer'

export const getFound = (search) => (dispatch) => {
    const api = `&api_key=f0d7e41686782ec02dbe7d4d333bce05 `
    const endpoint = `https://api.themoviedb.org/3/search/movie?query=${search}${api}`;

    axios
        .get(
            endpoint
        )
        .then((responce) => {
            dispatch(setFoundFilm(responce.data))
        })
}
