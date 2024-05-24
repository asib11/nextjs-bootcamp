import { notFound } from 'next/navigation';
import React from 'react';

const Blog = ({params}) => {
    const {id} = params;

    if(id=== '4') notFound();
    return (
        <div className='mt-6'>
            the blog id is {id}
        </div>
    );
};

export default Blog;