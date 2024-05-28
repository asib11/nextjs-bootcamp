import Comments from '@/app/components/comments';
import getAllData from '@/lib/getAllData';
import getPost from '@/lib/getPost';
import getPostComments from '@/lib/getPostComments';
import React, { Suspense } from 'react';

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
    const post = await getPost(id);
    const commentsPromise = getPostComments(id)
    // const [post, comments] = await Promise.all([postPromise, commentsPromise]) // this is not efficient

    return (
        <>
            <div className='text-blue-500'>
                <h1 className='text-2xl'>{post.title}</h1>
                <p className='mt-3'>{post.body}</p>
            </div>
            <Suspense fallback="<h1>comments are loading</h1>">
                <Comments promise={commentsPromise} />
            </Suspense>
        </>
    );
};

export default page;

export async function generateStaticParams() {
    const posts = await getAllData();
    return posts.map(post => ({ id: post.id.toString() },))
};
