import Link from 'next/link';
import React from 'react';

export const metadata = {
    title: 'about',
    description: 'this is about data',
  }

function layout({ children }) {
    return (
        <div className='mt-6'>
            <nav>
                <ul className="flex gap-6">
                    <li><Link href="/about/mission">Mission</Link></li>
                    <li><Link href="/about/vision">vision</Link></li>
                </ul>
            </nav>
            {children}
        </div>
    );
}

export default layout;