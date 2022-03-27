import React, { useRef, useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { setFindValue } from '../store/reducers/testReducer';

function FindInput(props) {
    const inputRef = useRef()
    const buttonRef = useRef()
    const dispatch = useDispatch()

    const setInputValue = useCallback(() => dispatch(setFindValue(inputRef.current.value)), [inputRef])
    
    return (
        <div>
            <div className="searchDiv">
                <input className="findFilm" ref={inputRef} style={props.styles}
                    placeholder="Найти фильм,сериал,персону..." />
                <div className="findFilmButton" style={props.buttonDivStyles}>
                    <Link to="/SearchResultPage">
                        <div className="findFilmButtonText" style={props.buttonStyles}
                            ref={buttonRef}
                            onClick={setInputValue}>
                            <span>Search</span>
                        </div>
                    </Link>
                </div>
            </div>
        </div >
    );
}

export default FindInput;
