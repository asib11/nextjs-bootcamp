import React from 'react';

const Blog = ({params}) => {
    const {id} = params;
    return (
        <div className='mt-6'>
            the blog id is {id}
        </div>
    );
};

export default Blog;