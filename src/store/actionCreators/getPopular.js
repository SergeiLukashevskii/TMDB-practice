import axios from 'axios'
import { setPopular } from '../reducers/testReducer'

export const getPopular = () => (dispatch) => {
   axios
      .get(
         `https://api.themoviedb.org/3/movie/popular?api_key=f0d7e41686782ec02dbe7d4d333bce05`
      )
      .then((responce) => {
         dispatch(setPopular(responce.data))
      })
}
