import React from 'react';
import quote from '../../assets/icons/quote.svg';
import people1 from '../../assets/images/people1.png';
import people2 from '../../assets/images/people2.png';
import people3 from '../../assets/images/people3.png';
import Review from './Review';

const Testimonials = () => {
    const reviews = [
        {
            _id: 1,
            name: "Winson herry",
            tales: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi labore in quod nemo libero eos reiciendis veritatis, quasi eius tenetur asperiores ratione dignissimos? Pariatur fuga voluptatem totam fugiat possimus minima at reprehenderit et doloremque, in assumenda perferendis earum error veritatis ullam aliquam ducimus officia commodi. Ipsa sapiente aliquam placeat quaerat?",
            image: people1
        },
        {
            _id: 2,
            name: "Winson herry",
            tales: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi labore in quod nemo libero eos reiciendis veritatis, quasi eius tenetur asperiores ratione dignissimos? Pariatur fuga voluptatem totam fugiat possimus minima at reprehenderit et doloremque, in assumenda perferendis earum error veritatis ullam aliquam ducimus officia commodi. Ipsa sapiente aliquam placeat quaerat?",
            image: people2
        },
        {
            _id: 3,
            name: "Winson herry",
            tales: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi labore in quod nemo libero eos reiciendis veritatis, quasi eius tenetur asperiores ratione dignissimos? Pariatur fuga voluptatem totam fugiat possimus minima at reprehenderit et doloremque, in assumenda perferendis earum error veritatis ullam aliquam ducimus officia commodi. Ipsa sapiente aliquam placeat quaerat?",
            image: people3
        }
    ]
    return (
        <div className='px-12 py-28'>
            <div className="flex justify-between items-center">
                <div>
                    <p className='text-primary font-bold'>Testimonials</p>
                    <h2 className='text-3xl'>What Our Patient Says</h2>
                </div>
                <div>
                    <img className='w-24 lg:w-48' src={quote} alt="quote" />
                </div>
            </div>
            <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-20'>
                {
                    reviews.map(review => <Review
                        key={review._id}
                        review={review}
                    ></Review>)
                }
            </div>
        </div>
    );
};

export default Testimonials;