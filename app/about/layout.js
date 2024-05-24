import React from 'react';

function layout({children}) {
    return (
        <div className='mt-6'>
            <nav>mission| vission</nav>
           {children} 
        </div>
    );
}

export default layout;