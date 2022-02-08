
import VkinoInfo from './VkinoInfo';
import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { getNowPlaying } from '../../../store/actionCreators/getNowPlaying'


function Vkino(props) {
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getNowPlaying())

    }, [])
    return (

        <div className="popularLane">
            <VkinoInfo/> 

        </div>

    );
}

export default Vkino;