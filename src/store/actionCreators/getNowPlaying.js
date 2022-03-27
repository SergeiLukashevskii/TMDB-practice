
import axios from 'axios'
import { setNowPlaying } from '../reducers/testReducer'

export const   getNowPlaying = () => (dispatch) => {
   axios
      .get(
         `https://api.themoviedb.org/3/movie/now_playing?api_key=f0d7e41686782ec02dbe7d4d333bce05`
      )
      .then((responce) => {
         dispatch(setNowPlaying(responce.data))  
      })
}
