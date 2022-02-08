import axios from 'axios'
import { setPerson } from '../reducers/testReducer'

export const getPerson = (id) => (dispatch) => {
   axios
      .get(
         `https://api.themoviedb.org/3/person/${id}?api_key=f0d7e41686782ec02dbe7d4d333bce05`
      )
      .then((responce) => {
         dispatch(setPerson(responce.data))
         
      })
}






