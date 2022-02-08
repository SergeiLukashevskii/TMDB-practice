import axios from 'axios'
import { setImage } from '../reducers/testReducer'

export const getImage = (id) => (dispatch) => {
   axios
      .get(
         `https://api.themoviedb.org/3/movie/${id}/images?api_key=f0d7e41686782ec02dbe7d4d333bce05`
      )
      .then((responce) => {
         dispatch(setImage(responce.data))
        
      })
}






  