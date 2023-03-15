import React, { useEffect, useState } from 'react';
import { Link, Outlet } from 'react-router-dom';

const Posts = () => {
    const [posts,setPosts] = useState([])
    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/posts')
        .then(res => res.json())
        .then(data => setPosts(data))
    },[])
    return (
        <div className='mt-14'>
            <h1 className='text-center text-3xl text-gray-700 italic mb-5'>Every Posts Facebook Ever Had: {posts.length}</h1>
            <div className='flex flex-wrap gap-y-4'>
                {
                    posts.map(post =>
                    <Link 
                        className='text-xl text-gray-700 italic p-2 ml-3 bg-gray-200 rounded-lg' 
                        to={`/posts/${post.id}`} 
                        key={post.id}
                    >{post.id}</Link>
                    )
                }
            </div>
            <Outlet></Outlet>
        </div>
    );
};

export default Posts;


