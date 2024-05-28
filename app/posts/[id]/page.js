import getPost from '@/lib/getPost';
import getPostComments from '@/lib/getPostComments';
import React from 'react';

export const generateMetadata = async ({ params }) => { // dynamic meta data
    const { id } = params;
    const post = await getPost(id);
    // console.log(comments)

    return {
        title: post.title,
        description: post.body
    }
}

const page = async ({ params }) => {
    const { id } = params;
    const postPromise = getPost(id);
    const commentsPromise = getPostComments(id)
    const [post, comments] = await Promise.all([postPromise, commentsPromise])

    return (
        <>
            <div className='text-blue-500'>
                <h1 className='text-2xl'>{post.title}</h1>
                <p className='mt-3'>{post.body}</p>
            </div>
            <div className='mt-10'>
                <ul>
                    {
                        comments.map(commnet => <li className='mt-6' key={commnet.id}>{commnet.body}</li>)
                    }
                </ul>
            </div>
        </>
    );
};

export default page;