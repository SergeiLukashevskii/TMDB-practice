import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getFilm } from "../../store/actionCreators/getFilm"
import { getImage } from "../../store/actionCreators/getImage"
import { selectFilm, selectImage } from "../../store/reducers/testReducer"
import { useParams } from 'react-router-dom';

export default function PopularFilmPage() {
    const dispatch = useDispatch()
    const { id } = useParams()
    const data = useSelector((state) => selectFilm(state, id))
    const image = useSelector((state) => selectImage(state, id))

    useEffect(() => {
        dispatch(getFilm(id))
        dispatch(getImage(id))


    }, [])

    const qwe = image ? image.posters[0].file_path : "just image" /* /cgvpApTCyGsms9EMUQzx6xGTRDq.png */
    const qqqq = "https://image.tmdb.org/t/p/original" + qwe

    return (
        <div className="InfoContainer">
            <div className="InfoContainer">
                <div className="imgInfo">
                    < img className="filmPoster" src={qqqq} alt="" />
                </div>
                <div className="textInfo">
                    <div className="textInfoTop">
                        <div>
                            {data ? data.title : "just data"}  ({data ? data.release_date.substring(0, 4) : "loading..."})
                        </div>
                        <div className="genresContainer">
                            {data ? data.genres.map((item,index )=> <div key={index} className="genres">{item.name}</div>) : "loading..."}
                            <div>
                                {data ? data.runtime + "m" : "loading..."}
                            </div>
                        </div>
                    </div>
                    <div className="circleDiv">
                        <div className="PFPageVoitCircle">
                            {data ? data.vote_average * 10 : "loading..."}
                        </div>
                        <div className="ps">
                            <div> Пользовательский  </div>
                            <div>счёт   </div>
                        </div>
                    </div>
                    <div className="tagline">
                        {data ? data.tagline : "loading..."}
                    </div>
                    <div>
                        Обзор
                    </div>
                    <div className="overview">
                        {data ? data.overview : "loading..."}
                    </div>
                </div>
            </div>
        </div>
    );
}
