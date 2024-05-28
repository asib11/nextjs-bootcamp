import getPost from '@/lib/getPost';
import React from 'react';

export const generateMetadata = async ({ params }) =>{ // dynamic meta data
    const { id } = params;
    const post = await getPost(id);
    return {
        title: post.title,
        description: post.body
    }
}

const page = async ({ params }) => {
    const { id } = params;
    const post = await getPost(id);

    return (
        <>
            <h1 className='text-2xl'>{post.title}</h1>
            <p className='mt-3'>{post.body}</p>
        </>
    );
};

export default page;