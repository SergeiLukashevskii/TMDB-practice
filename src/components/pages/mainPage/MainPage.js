import { useState } from "react"
import PoTv from './PoTv';
import Vkino from "./Vkino"
import FindInput from "../../FindInput";




export default function MainPage(props) {

    const [st, setSt] = useState(true)
   

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
                    <button className="bt" onClick={() => setSt(true)}>  По тв </button>
                    <button className="bt" onClick={() => setSt(false)}>   В кино </button>
                </div>
                <div>
                    {st && <PoTv />}
                    {!st && <Vkino />}
                </div>
            </div>
        </div>
    );
}
