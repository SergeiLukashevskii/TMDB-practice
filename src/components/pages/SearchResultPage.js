import React, { useEffect } from 'react';
import { selectFindValue, selectFoundFilm } from '../../store/reducers/testReducer';
import { useDispatch, useSelector } from "react-redux"
import { getFound } from '../../store/actionCreators/getFound';
import styles from "./SearchResultPage.module.css"
import FindInput from '../FindInput';
import { Link } from 'react-router-dom';

function SearchResultPage(props) {
    const dispatch = useDispatch()
    const value = useSelector((state) => selectFindValue(state))
    const data = useSelector((state) => selectFoundFilm(state))
    useEffect(() => (dispatch(getFound(value))))

    const poster = "https://image.tmdb.org/t/p/original/"

    return (
        <div className={styles.container}>
            <FindInput styles={{ borderTop: "3px solid #FFB273", borderBottom: "3px solid #FFB273", borderRadius: 0 }}
                buttonStyles={{ color: "black", borderRadius: 0, backgroundColor: "#FFB273" }}
                buttonDivStyles={{ borderRadius: 0, backgroundColor: "white" }} />
            <div className={styles.filmsContainer}>
                {data.results ? data.results.map((e, index) =>
                    <div className={styles.filmContainer} key={index}>
                        <Link to={"/movies/" + e.id} >     <img className={styles.poster} src={`${poster}${e.poster_path}`} alt="noPoster(" /> </Link>
                        <div className={styles.titleContainer}>
                            <div className={styles.title}> <Link to={"/movies/" + e.id} >{e.title}</Link>  </div>
                            <div className={styles.review}> {e.overview}  </div>
                        </div>
                    </div>) : ""}
            </div>
        </div>
    );
}

export default SearchResultPage;
