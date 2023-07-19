import React from 'react';
import './Country.css';

const Country = (props) => {
    const { population, region, name, flags } = props.country;
    return (
        <div className='country '>
            <img src={flags.png} alt="" />
            <h4 className='mt-4'>country name : {name.common}</h4>
            <h5 className='mt-2'>Official Name: {name.official}</h5>
            <p className='mt-2'>Region: {region}</p>
            <h4>Population: {population}</h4>
        </div>
    );
};

export default Country;