
import PoTvInfo from './PoTvInfo';
import { getPopular } from '../../../store/actionCreators/getPopular'
import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'


function PoTv(props) {
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getPopular())

    }, [])
    return (

        <div className="popularLane">

            <PoTvInfo /> 


        </div>

    );
}

export default PoTv;