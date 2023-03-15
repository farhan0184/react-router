import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const PostDetail = () => {
    const {postId} = useParams();
    const [post,setPost] = useState({})
    useEffect(()=>{
        fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`)
        .then(res => res.json())
        .then(data => setPost(data))
    },[post])
    return (
        <div className='mt-14 ml-8'>
            <h1 className=' text-3xl text-gray-700 italic font-semibold'>This is user {postId} post details: </h1>
            <p className=' text-xl text-gray-700 italic font-semibold'>Title: <span className='font-normal ml-2'>{post?.title}</span></p>
            <p className=' text-xl text-gray-700 italic font-semibold'>Body: <span className='font-normal ml-2'>{post?.body}</span></p>
        </div>
    );
};

export default PostDetail;