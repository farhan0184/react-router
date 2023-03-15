import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Country from '../Country/Country';

const Countries = () => {
    const [countries, setCountries] = useState([]);
    useEffect(()=>{
        fetch(`https://restcountries.com/v3.1/all`)
        .then(res => res.json())
        .then(data => setCountries(data))
    },[])
    return (
        <div className='mt-14 ml-10'>
            <h1 className=' text-3xl text-gray-700 italic font-semibold'>All countries list:</h1>
            {
                countries.map(country => 
                    <Country
                        key={country.ccn3}
                        country= {country}
                    ></Country>
                )
            }

        </div>
    );
};

export default Countries;