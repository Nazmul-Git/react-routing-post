/* eslint-disable no-unused-vars */
import React from 'react';
import { useLoaderData } from 'react-router-dom';

const PostDetails = () => {
    const post=useLoaderData();
    // console.log(post)
    const {userId, title,body}=post;
    return (
        <div className='text-center m-16 bg-green-200 p-8'>
            <p className='font-bold'>Post Details</p>
            <p><span className='font-semibold'>User Id: </span> {userId}</p>
            <p><span className='font-semibold'>Title: </span> {title}</p>
            <p><span className='font-semibold'>Comments: </span> {body}</p>
            
        </div>
    );
};

export default PostDetails;