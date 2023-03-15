import React, { useEffect, useState } from 'react';
import Friend from '../Friend/Friend';

const Friends = () => {
    const [friends, setFriends] = useState([])
    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(res => res.json())
        .then(data => setFriends(data))
    },[])
    return (
        <div className='mt-14'>
            <h1 className='text-center text-3xl text-gray-700 italic'>This is my friends section</h1>
            <p className='text-center text-3xl text-gray-700 italic'>Total friend: {friends.length}</p>
            {
                friends.map(friend => <Friend
                    key={friend.id}
                    friend= {friend}
                ></Friend>)
            }
        </div>
    );
};

export default Friends;