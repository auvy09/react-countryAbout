import React, { useEffect, useState } from 'react';
import './Countries.css'
import Country from './Country/Country';

const Countries = () => {
    const [countries, setCountries] = useState([]);
    useEffect(() => {

        fetch('https://restcountries.com/v3.1/all')
            .then(res => res.json())
            .then(data => setCountries(data));

    }, [])

    return (

        <div >
            <h1>Hello From The Otherside </h1>
            <p>Total Countries:{countries.length}</p>
            <div className='counties-container'>{
                countries.map(country => <Country
                    country={country}
                    key={country.cca3}
                ></Country>)
            }</div>


        </div >
    );
};



export default Countries;