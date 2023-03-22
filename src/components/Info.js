import React from "react";
import { useSelector } from "react-redux";

import './Info.css'

const Info = () => {

    const valText = useSelector(state => state.text);
    
    return (
        <section className='info'>
            <h2 className='info__text'>
                {valText}
            </h2>
        </section>
    );
}

export default Info;