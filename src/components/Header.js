import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux'
import auth from "../store/actionCreators/auth"
import FindInput from './FindInput';
import { useState, useMemo, useCallback } from 'react';
import { setUser, selectUser } from '../store/reducers/userReducer';

const logo = "https://www.themoviedb.org/assets/2/v4/logos/v2/blue_short-8e7b30f73a4020692ccca9c88bafe5dcb6f8a62a4c6bc55cd9ba82bb2cd95f6c.svg"
const search = <svg className="search" viewBox="0 0 24 24">
    <path fill="currentColor" d="M9.5,3A6.5,6.5 0 0,1 16,9.5C16,11.11 15.41,12.59 14.44,13.73L14.71,14H15.5L20.5,19L19,20.5L14,15.5V14.71L13.73,14.44C12.59,15.41 11.11,16 9.5,16A6.5,6.5 0 0,1 3,9.5A6.5,6.5 0 0,1 9.5,3M9.5,5C7,5 5,7 5,9.5C5,12 7,14 9.5,14C12,14 14,12 14,9.5C14,7 12,5 9.5,5Z" />
</svg>
const profile = <svg className="search" viewBox="0 0 24 24">
    <path fill="currentColor" d="M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M12,8.39C13.57,9.4 15.42,10 17.42,10C18.2,10 18.95,9.91 19.67,9.74C19.88,10.45 20,11.21 20,12C20,16.41 16.41,20 12,20C9,20 6.39,18.34 5,15.89L6.75,14V13A1.25,1.25 0 0,1 8,11.75A1.25,1.25 0 0,1 9.25,13V14H12M16,11.75A1.25,1.25 0 0,0 14.75,13A1.25,1.25 0 0,0 16,14.25A1.25,1.25 0 0,0 17.25,13A1.25,1.25 0 0,0 16,11.75Z" />
</svg>
const cross = <svg className="search" viewBox="0 0 24 24">
    <path fill="currentColor" d="M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z" />
</svg>

function Header(props) {
    const dispatch = useDispatch()
    const data = useSelector((state) => selectUser(state))
    const [displaySearch, setDisplaySearch] = useState(false)

    const login = useCallback(() => dispatch(auth()), [])
    const logged = useMemo(() => data ? data.id : false, [data])
    const dispatchSetUser = useCallback(() => dispatch(setUser()), [])
    const removeSessionID = useCallback(() => localStorage.removeItem("sessionId"), [])
    const toggleDisplaySearch = useCallback(() => setDisplaySearch(!displaySearch), [displaySearch])

    return (
        <div className="headerContainer">
            <div className="headerContainerLeft">
                <div className="logoDiv">
                    <a >
                        <Link to="/">   <img className="logo" src={logo} alt="" /> </Link>
                    </a>
                </div>
                <div className="headerContainerLeftFilms"   >
                    <a href="#">????????????</a>
                    <div className="popit" >
                        <div className="popitFilmsElem"> <Link to="/PopularFilms">????????????????????</Link></div>
                        <div className="popitFilmsElem"> <Link to="/WatchNow">?????????????? ????????????</Link></div>
                        <div className="popitFilmsElem"> <Link to="/Expected">??????????????????</Link></div>
                        <div className="popitFilmsElem"> <Link style={{ color: "#FFE773" }} to="/BestFilms">????????????</Link></div>
                    </div>
                </div>
                <div className="headerContainerLeftSerials" >
                    <a href="#">??????????????</a>
                    <div className="popit" >
                        <div className="popitFilmsElem"> <Link to="/PopularSerials">????????????????????</Link></div>
                        <div className="popitFilmsElem"> <Link to="/Live">?? ?????????? ??????????????</Link></div>
                        <div className="popitFilmsElem"> <Link to="/OnTv">???? ??????????????????????</Link></div>
                        <div className="popitFilmsElem"> <Link style={{ color: "#FFE773" }} to="/BestSerials">????????????</Link></div>
                    </div>
                </div>
                <div className="headerContainerLeftMen" >
                    <a href="#">???????? </a>
                    <div className="popitPopularMen">
                        <div className="popitFilmsElem"> <Link to="/PopularMen">???????????????????? ????????</Link></div>
                    </div>
                </div>
                <div className="headerContainerLeftMore" >
                    <a href="#">??????</a>
                    <div className="popit">
                        <div className="popitFilmsElem"> <Link to="/Discussions" style={{ color: "#FFE773" }}>????????????????????</Link></div>
                        <div className="popitFilmsElem"> <Link to="/HallofFame">?????????? ????????????</Link></div>
                        <div className="popitFilmsElem"> <Link to="/Support">??????????????????</Link></div>
                        <div className="popitFilmsElem"> <Link to="/Api">API</Link></div>
                    </div>
                </div>
            </div>
            <div className="headerContainerRight">
                {
                    !logged && <div className="login" onClick={login} >
                        <a href="#"> ??????????</a>
                    </div>
                }
                {
                    logged && < div className="login" onClick={dispatchSetUser} >
                        <a href="#" onClick={removeSessionID}> ??????????</a>
                    </div>
                }
                <Link to="/profile"><div className={data ? "headerUserLogoLogged" : "headerUserLogoUnlogged"} >{profile}</div></Link>


                <div><a href="#" onClick={toggleDisplaySearch}>{displaySearch ? cross : search}</a></div>

            </div>
            {
                displaySearch && <div className='HeaderFindInput'>
                    < FindInput styles={{ backgroundColor: "white", borderRadius: 0, }}
                        buttonStyles={{ color: "black" }}
                        buttonDivStyles={{ borderRadius: 0 }}
                    />
                </div>
            }
        </div >
    );
}

export default Header;
