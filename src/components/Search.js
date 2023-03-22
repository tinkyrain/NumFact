import React from "react";
import { useDispatch } from "react-redux";
import './Search.css'

const Search = () => {

    const dispatch = useDispatch();

    const URL = 'http://numbersapi.com/';

    const getInfo = () => {
        fetch(`${URL}${getRandomInt(100)}`)
        .then(response => response.text())
        .then(data => {
            dispatch({type: 'ADD_TEXT', textChange: data});
        });
    }

    const getRandomInt = (max) => {
        return Math.floor(Math.random() * max);
    }

    getInfo();

    return(
        <section className='searchSection'>
            <button className="btn" onClick={() => getInfo()}>Numerical Fact</button>
        </section>
    );
}

export default Search;