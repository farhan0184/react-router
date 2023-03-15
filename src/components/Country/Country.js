import React from 'react';
import { Link } from 'react-router-dom';

const Country = (props) => {
    const {name} = props.country
    return (
        <div>
            <Link className='text-xl italic text-gray-700 mb-3 font-semibold mt-2' to={`/country/${name.common}`}>{name.common}</Link>
        </div>
    );
};

export default Country;