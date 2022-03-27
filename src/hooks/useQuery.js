import { useLocation } from "react-router-dom";
// 2 //
// useLocation() - возвращает объект , поле search содержит весь url после  ? 
// http://localhost:3000/login?request_token=89509bf205f46d72516e0bca0f151536da21511b&approved=true 
// useLocation().search =  ?request_token=89509bf205f46d72516e0bca0f151536da21511b&approved=true 
function useQuery() {
    return new URLSearchParams(useLocation().search);      // данный метод позволяет получать необходимые значения query- параметров 
                                                           //  approved=true
                                             // query.get("approved ") = true  , query.get("request_token") = 89509bf205f46d72516e0bca0f151536da21511b

}

export default useQuery;