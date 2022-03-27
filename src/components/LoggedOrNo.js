import React from 'react';
import { useSelector } from "react-redux"
import { selectUser } from ".././store/reducers/userReducer"

function LoggedOrNo({ children }) {
    const data = useSelector(state => selectUser(state))
    return data ? children : <div style={{ minHeight: 500 }}> you need to login </div>
}

export default LoggedOrNo;
