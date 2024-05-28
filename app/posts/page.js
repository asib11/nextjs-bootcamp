import getAllData from '@/lib/getAllData';
import React from 'react';

const page = async () => {
    const posts = await getAllData();
    console.log(posts)
    return (
        <div>
            <h1>Posts</h1>
        </div>
    );
};

export default page;