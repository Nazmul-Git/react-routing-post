/* eslint-disable no-unused-vars */
import React from 'react';
import { useLoaderData } from 'react-router-dom';
import AllPost from '../AllPost/AllPost';


const Products = () => {
    const posts=useLoaderData();
   
    return (
        <div>
            <p className='text-center'>All products</p>
            <div className='md:grid grid-cols-3 m-16 p-8 '>
                {
                    posts.map(post=><AllPost key={post.id} post={post}></AllPost>)
                }
            </div>
        </div>
    );
};

export default Products;