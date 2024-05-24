import Button from '@/app/components/button';
import React from 'react';
import Image from 'next/image';
import thump from '@/public/images/image1.jpg'

const Vision = () => {
    return (
        <main className="">
            <div className="mt-10">
                <h1 className="text-7xl">Vision</h1>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odio, veritatis neque itaque quia assumenda eaque ut nihil dolorum eos maiores in hic nulla iusto deserunt necessitatibus quod perspiciatis deleniti illo.
            </div>
            <div className='w-[400px]'>
                <Image placeholder="blur" src={thump} alt='test image' />
            </div>

            <Button></Button>
        </main>
    );
};

export default Vision;