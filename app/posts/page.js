import getAllData from '@/lib/getAllData';
import Link from 'next/link';
import React from 'react';

const page = async () => {
    const posts = await getAllData();
    console.log(posts)
    return (
        <div>
            <h1 className='text-7xl'>Posts</h1>
            <ul>
                {
                    posts.map(post => <li key={post.id} >
                    <Link href={`/posts/${post.id}`}>{post.title}</Link>
                    </li> )
                }
            </ul>
        </div>
    );
};

export default page;