import React from 'react';

const getPostComments = async (id) => {
    const comments = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}/comments`)
    return comments.json();
};

export default getPostComments;