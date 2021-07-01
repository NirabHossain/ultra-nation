import React from 'react';
import './Country.css';

const Country = (props) => {

    const {name, capital, population, flag}=props.country;
    const addCountryHandler=props.addCountryHandler;
    return (
        <div className='country-container'>
            <div className='country'>
                <h3>{name}</h3>
                <div className='country-info'>
                    <h5>Capital: {capital}</h5>
                    <h5>Population: {population}</h5>
                </div>
                <img src={flag} alt="" /><br />
                <button onClick={()=>addCountryHandler(props.country)}>Add country</button>
            </div>
        </div>
    );
};

export default Country;
