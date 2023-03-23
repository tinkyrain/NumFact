import React from "react";
import { useDispatch } from "react-redux";
import './Search.css';
import store from '../index'

const Search = () => {

    const dispatch = useDispatch();
    let text  = null;

    const URL = 'http://numbersapi.com/';

    const getInfo = () => {
        fetch(`${URL}${getRandomInt(100)}`)
        .then(response => response.text())
        .then(data => {
            dispatch({type: 'ADD_TEXT', textChange: data});
            text = data;
        });
    }

    const getRandomInt = (max) => {
        return Math.floor(Math.random() * max);
    }

    const copyFact = () => {
        return navigator.clipboard.writeText(text);
    }

    getInfo();

    return(
        <section className='searchSection'>
            <div className='searhSection_btnDiv'>
                <button className="btn" onClick={() => getInfo()}>Numerical Fact</button>
                <a className='CopyLink' onClick={() => copyFact()}>Copy Fact!</a>
            </div>
        </section>
    );
}

export default Search;