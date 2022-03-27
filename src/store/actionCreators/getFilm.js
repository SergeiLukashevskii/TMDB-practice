import axios from 'axios'
import { setFilm } from '../reducers/testReducer'

export const getFilm = (id) => (dispatch) => {
   axios
      .get(
         `https://api.themoviedb.org/3/movie/${id}?api_key=f0d7e41686782ec02dbe7d4d333bce05`
      )
      .then((responce) => {
         dispatch(setFilm(responce.data))
      })
}
