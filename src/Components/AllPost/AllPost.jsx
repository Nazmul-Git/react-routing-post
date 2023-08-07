/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react';
import { Link } from 'react-router-dom';

const AllPost = ({ post }) => {
    const { id, title } = post
    return (
        <div className='bg-blue-300 m-8 p-6 h-40 relative '>
            <h2>{title}</h2>
            <div className='absolute bottom-2'>
                <Link to={`/post/${id}`} className='font-bold text-red-500 hover:text-orange-500'>Details</Link>
            </div>
        </div>
    );
};

export default AllPost;