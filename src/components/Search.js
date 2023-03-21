import React from "react";
import './Search.css'

const Search = () => {

    const URL = 'http://numbersapi.com/';

    const getInfo = () => {
        fetch(`${URL}${getRandomInt(100)}`)
        .then(response => response.text())
        .then(data => {
            console.log(data);
        })
    }

    const getRandomInt = (max) => {
        return Math.floor(Math.random() * max);
    }

    return(
        <section className='searchSection'>
            <button className="btn" onClick={() => getInfo()}>Numerical Fact</button>
        </section>
    );
}

export default Search;