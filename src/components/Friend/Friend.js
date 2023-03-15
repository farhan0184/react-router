import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Friend = (props) => {
    const {name, username, id} =props.friend
    const navigate = useNavigate(); // for button otherwise use Link
    const showFriendDetail = () =>{
        const path = `/friend/${id}`;
        navigate(path);
    }
    return (
        <div className='mt-14'>
            <h1 className='text-center text-xl text-gray-700 italic'>{name}</h1>
            
            <div className='w-full flex justify-center'>
                <div>
                    {/* two ways for dynamic link */}
                    <Link className='text-center text-xl text-gray-700 italic py-2 px-4 bg-gray-400 rounded-lg mt-5 mr-5' to={'/friend/' + id}>Show Details</Link>
                    <button onClick={showFriendDetail} className='text-center text-xl text-gray-700 italic py-2 px-4 bg-gray-400 rounded-lg mt-5'>{username} Id: {id}</button>
                </div>
            </div>
        </div>
    );
};

export default Friend;