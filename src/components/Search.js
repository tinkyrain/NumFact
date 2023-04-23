import React from "react";
import { useDispatch } from "react-redux";
import './Search.css';

const Search = () => {
    const dispatch = useDispatch();
    let text  = null;

    const URL = 'http://numbersapi.com/random?min=1&max=500';

    const getInfo = () => {
        fetch(`${URL}`)
        .then(response => response.text())
        .then(data => {
            dispatch({type: 'ADD_TEXT', textChange: data});
            text = data;
        });
    }

    const copyFact = () => {
        alert('You copied this fact!');
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