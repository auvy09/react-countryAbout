import React from 'react';
import './Country.css';

const Country = (props) => {
    const { population, region, name, flags } = props.country;
    return (
        <div className='country'>
            <img src={flags.png} alt="" />
            <h2>country name : {name.common}</h2>
            <h4>Official Name: {name.official}</h4>
            <h5>Region: {region}</h5>
            <h3>Population: {population}</h3>
        </div>
    );
};

export default Country;