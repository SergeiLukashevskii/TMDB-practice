import { Link } from 'react-router-dom';
import { useMemo} from 'react';

export default function MoviesList({ movies }) {  
    const renderPoTvFilms = useMemo(() => movies.results ? movies.results.map((element, index) =>
        <Link to={"/movies/" + element.id} key={index}>
            <div className="FilmInfoContainer" >
                <div className="popularImgDiv" >
                    <img className="popularImg" src={"https://image.tmdb.org/t/p/original" + element.poster_path} />
                    <div className="popularVoitCircle">{element.vote_average * 10}</div>
                    <div className="popularTitle">{element.title}</div>
                    <div className="popularFilmReleaseData">{element.release_date}</div>
                </div>
            </div>
        </Link>)
        : "loading...", [movies.results])
    // const qwe = image ? image.posters[0].file_path : "just image" /* /cgvpApTCyGsms9EMUQzx6xGTRDq.png */
    //  const qqqq = "https://image.tmdb.org/t/p/original" + qwe  //
    return (
        <div className="popularLane">
            <div className="FilmsInfoContainer">
                {renderPoTvFilms}
            </div>
        </div>
    );
}
