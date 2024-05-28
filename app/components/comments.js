import React from 'react';

const Comments =async ({promise}) => {
    const comments = await promise
    return (
        <div className='mt-10'>
            <h1 className='text-xl'>commnets</h1>
            <ul>
                {
                    comments.map(commnet => <li className='mt-6' key={commnet.id}>{commnet.body}</li>)
                }
            </ul>
        </div>
    );
};

export default Comments;