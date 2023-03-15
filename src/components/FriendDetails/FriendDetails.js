import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const FriendDetails = () => {
    const {friendId} = useParams(); //used for get exact value or key of any link or button and its variable and route dynamic variable are same.
    // friendId fetch other information
    const [{name,username,email,address,website,company}, setFriend] = useState({});
    useEffect(() =>{
        const url =  `https://jsonplaceholder.typicode.com/users/${friendId}`
        fetch(url)
        .then(res => res.json())
        .then(data => setFriend(data))
    },[])

    return (
        <div className='mt-14'>
            <h1 className='ml-11 text-3xl italic text-gray-700 mb-5 font-semibold'>Friend Detail:</h1>
            <p className='ml-14 text-xl italic text-gray-700 mb-3 font-semibold'>Name: <span className='font-normal ml-3'>{name} </span></p>
            <p className='ml-14 text-xl italic text-gray-700 mb-3 font-semibold'>UserName: <span className='font-normal ml-3'>{username}</span></p>
            <p className='ml-14 text-xl italic text-gray-700 mb-3 font-semibold'>Email: <span className='font-normal ml-3'>{email}</span></p>
            <p className='ml-14 text-xl italic text-gray-700 mb-3 font-semibold'>Address: <span className='font-normal ml-3'>{address?.city}</span></p>
            <p className='ml-14 text-xl italic text-gray-700 mb-3 font-semibold'>Website: <span className='font-normal ml-3'>{website}</span></p>
            <p className='ml-14 text-xl italic text-gray-700 mb-3 font-semibold'>Company: <span className='font-normal ml-3'>{company?.name}</span></p>
            {/* here use ? for load data */}
        </div>
    );
};

export default FriendDetails;