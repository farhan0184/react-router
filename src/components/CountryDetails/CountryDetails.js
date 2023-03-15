import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const CountryDetails = () => {
    const {countryName} = useParams()
    const [country, setCountry] = useState([])
    useEffect(()=>{
        fetch(`https://restcountries.com/v3.1/name/${countryName}`)
        .then(res => res.json())
        .then(data => setCountry(data[0]))
    },[])
    console.log(country.capital)
    return (
        <div className='mt-14 ml-8'>
            <h1 className=' text-3xl text-gray-700 italic font-semibold'>The country name is: {countryName}</h1>
            <img width={400} height={400} src={country.flags?.png} alt="" />
            <p className='text-xl italic text-gray-700 mb-3 font-semibold mt-3'>Capital: <span className='font-normal ml-3'>{country.capital} </span></p>
            <p className='text-xl italic text-gray-700 mb-3 font-semibold mt-2'>Population: <span className='font-normal ml-3'>{country.population} </span></p>
            <p className='text-xl italic text-gray-700 mb-3 font-semibold mt-2'>Region: <span className='font-normal ml-3'>{country.region} </span></p>
            
        </div>
    );
};

export default CountryDetails;