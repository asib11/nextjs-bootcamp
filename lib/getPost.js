import React from 'react';

const getPost = async (id) => {

    const post = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
    return post.json()

};

export default getPost;