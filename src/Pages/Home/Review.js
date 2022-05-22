import React from 'react';

const Review = ({ review }) => {
    const { name, image, tales } = review;
    return (
        <div className='shadow-lg mt-10 p-5'>
            <p>{tales}</p>
            <div className='flex justify-center items-center pt-12'>
                <div className="avatar">
                    <div className="w-24 rounded-full ring ring-primary ring-offset-base-100 mr-5">
                        <img src={image} alt="" />
                    </div>
                </div>
                <div>
                    <p className='text-xl'>{name}</p>
                    <p>California</p>
                </div>
            </div>
        </div>
    );
};

export default Review;