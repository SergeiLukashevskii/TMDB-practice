import getUser from './getUser'
// 6 // 
export const checkUserAuth = (id) => (dispatch) => {
    if (localStorage.getItem("sessionId")) {  // если в localStorage есть session_id 
        dispatch(getUser())                   // то мы отправляем запрос , который использует sessiond_id и получаем информацию о User`e
    }
}
