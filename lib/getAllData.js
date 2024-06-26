import React from 'react';

const getAllData = async () => {
    const result = await fetch(
        'https://jsonplaceholder.typicode.com/posts?_limit=10',
        {
            // cache: 'no-store' // off caching
            next:{
                revalidate:100
            }
        }

    )
    return result.json()
};

export default getAllData;