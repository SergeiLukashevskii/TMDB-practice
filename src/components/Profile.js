import React from 'react';
import { useSelector } from 'react-redux';
import { selectUser } from "../store/reducers/userReducer"

function Profile(props) {
    const user = useSelector((state) => selectUser(state))
    const entries = Object.entries(user)
    const finalEntries = entries
 
    return (
        <div style={{ minHeight: 500 }}>
            {finalEntries.map((e, index) => <div key={index}> {e[0] + ":" + "  "} <span style={{ color: "red" }}>{String(e[1])}</span>  </div>)}
        </div>
    )
}

export default Profile;
