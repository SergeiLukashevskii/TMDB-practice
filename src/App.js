import './App.css'
import Header from "./components/Header"
import MainPage from "./components/pages/mainPage/MainPage"
import Footer from "./components/Footer"
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';
import FilmReviewPage from "./components/pages/FilmReviewPage"
import BestFilms from "./components/pages/films/BestFilms"
import Expected from "./components/pages/films/Expected"
import PopularFilms from "./components/pages/films/PopularFilms"
import WatchNow from "./components/pages/films/WatchNow"
import PopularMen from "./components/pages/men/PopularMen"
import BestSerials from "./components/pages/serials/BestSerials"
import Live from "./components/pages/serials/Live"
import OnTv from "./components/pages/serials/OnTv"
import PopularSerials from "./components/pages/serials/PopularSerials"
import Api from "./components/pages/more/Api"
import Discussions from "./components/pages/more/Discussions"
import HallofFame from './components/pages/more/HallofFame'
import Support from "./components/pages/more/Support"
import Login from "./Login"
import { useDispatch } from 'react-redux';
import { checkUserAuth } from './store/actionCreators/checkUserAuth';
import { useEffect } from 'react';
import SearchResultPage from './components/pages/SearchResultPage';
import Profile from './components/Profile';
import LoggedOrNo from './components/LoggedOrNo';

function App(props) {
   const dispatch = useDispatch()

   useEffect(() => {
      dispatch(checkUserAuth())                // чекаем session_id , если есть - получаем User`a и пушим его в redux  //
   }, [])

   return (
      <div className='container' >
         <Router>
            <Header />
            <div className="bodyContainer">
               <Switch>
                  <Route exact path={"/"} component={MainPage} />
                  <Route path={`/movies/:id`} component={FilmReviewPage} />
                  <Route exact path={"/Expected"} component={Expected} />
                  <Route exact path={"/PopularFilms"} component={PopularFilms} />
                  <Route exact path={"/WatchNow"} component={WatchNow} />
                  <Route exact path={"/PopularMen"} component={PopularMen} />
                  <Route exact path={"/Live"} component={Live} />
                  <Route exact path={"/OnTv"} component={OnTv} />
                  <Route exact path={"/PopularSerials"} component={PopularSerials} />
                  <Route exact path={"/Api"} component={Api} />
                  <Route exact path={"/HallofFame"} component={HallofFame} />
                  <Route exact path={"/Support"} component={Support} />
                  <Route exact path={"/login"} component={Login} />
                  <Route exact path={"/SearchResultPage"} component={SearchResultPage} />
                  <LoggedOrNo>
                     <Route exact path={"/profile"} component={Profile} />
                     <Route exact path={"/BestFilms"} component={BestFilms} />
                     <Route exact path={"/BestSerials"} component={BestSerials} />
                     <Route exact path={"/Discussions"} component={Discussions} />
                  </LoggedOrNo>
               </Switch >
            </div>
            <Footer />
         </Router>
      </div>
   )
}

export default App
