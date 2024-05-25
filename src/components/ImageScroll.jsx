"use client"
import React, { useRef } from 'react';
import { MdChevronLeft, MdChevronRight } from 'react-icons/md';
import Image from "next/image";
import { data } from './mockData';

const ImageScroll = () => {
    const sliderRef = useRef(null);

    const slideLeft = () => {
        const slider = sliderRef.current;
        slider.scrollLeft -= 500;
    };

    const slideRight = () => {
        const slider = sliderRef.current;
        slider.scrollLeft += 500;
    };

    return (
        <>
            <div className='relative flex items-center w-full'>
                <MdChevronLeft className='opacity-50 cursor-pointer hover:opacity-100' onClick={slideLeft} size={40} />
                <div
                    ref={sliderRef}
                    id='slider'
                    className='w-full h-full overflow-x-scroll scroll whitespace-nowrap scroll-smooth scrollbar-hide'
                >
                    {data.map((item) => (
                        <div key={item.id} className='inline-block p-2 cursor-pointer hover:scale-105 ease-in-out duration-300'>
                            <Image
                                src={item.img}
                                alt='/'
                                width={220}
                                height={220}
                            />
                        </div>
                    ))}
                </div>
                <MdChevronRight className='opacity-50 cursor-pointer hover:opacity-100' onClick={slideRight} size={40} />
            </div>
        </>
    );
}

export default ImageScroll;
