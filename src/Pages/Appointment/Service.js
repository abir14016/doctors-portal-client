import React from 'react';

const Service = ({ service }) => {
    const { name, slots } = service;
    return (
        <div class="card w-96 bg-base-100 shadow-xl">
            <div class="card-body text-center">
                <h2 class="text-center text-2xl text-primary">{name}</h2>
                <p>
                    {
                        slots.length ?
                            <span>{slots[0]}</span> :
                            <span className='text-red-600'>No slot avaiable</span>
                    }
                </p>
                <p>{slots.length} spaces available</p>
                <div class="card-actions justify-center">
                    <button disabled={slots.length === 0} class="btn btn-primary">Buy Now</button>
                </div>
            </div>
        </div>
    );
};

export default Service;