import { useState, useCallback, useEffect } from "react"
import FindInput from "../../FindInput";
import MoviesList from "./MoviesList";
import { getPopular } from "../../../store/actionCreators/getPopular";
import { getNowPlaying } from "../../../store/actionCreators/getNowPlaying";
import {useSelector , useDispatch} from 'react-redux'
import {selectNowPlaying , selectPopular} from '../../../store/reducers/testReducer'
import {POPULAR_MOVIES_CATEGORIES} from './consts' 

export default function MainPage(props) {
    const dispatch = useDispatch()
    const [popularCategory, setPopularCategory] = useState(POPULAR_MOVIES_CATEGORIES.POTV)

    const setPoTvCategory = useCallback(() => setPopularCategory(POPULAR_MOVIES_CATEGORIES.POTV), [])
    const setVKinoCategory = useCallback(() => setPopularCategory(POPULAR_MOVIES_CATEGORIES.VKINO), [])
    const poTvMovies =  useSelector((state) => selectNowPlaying(state))
    const vKinoMovies =  useSelector((state) => selectPopular(state))

    useEffect(()=>{
    if ( popularCategory === POPULAR_MOVIES_CATEGORIES.POTV ){dispatch(getNowPlaying())}
    else{dispatch(getPopular())}

    }
    ,[popularCategory])

    return (
        <div className="mainPageContainer">
            <div className="welcomeContainer">
                <div className="welcomeContent">
                    <div className="title">
                        <h2>Добро пожаловать</h2>
                        <h3>Миллионы фильмов,сериалов и людей.Исследуйте сейчас</h3>
                    </div>
                    <FindInput search="jews" />
                </div>
            </div>
            <div className="popular">
                <div className="popularHeader">
                    <div className="watPop">Что популярно</div>
                    <button className="bt" onClick={setPoTvCategory}>  По тв </button>
                    <button className="bt" onClick={setVKinoCategory}>   В кино </button>
                </div>
                <div>
                    <MoviesList movies={popularCategory===POPULAR_MOVIES_CATEGORIES.POTV?poTvMovies:vKinoMovies}/>
                </div>
            </div>
        </div>
    );
}
