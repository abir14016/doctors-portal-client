import React from 'react';
import appointment from '../../assets/images/appointment.png';

const Contact = () => {
    return (
        <div className='py-12' style={{
            background: `url(${appointment})`
        }}>
            <p className='text-primary text-center font-bold'>Contact us</p>
            <p className='text-3xl text-center text-white mb-12'>Stay commented with us</p>
            <div>
                <input className='mx-auto block rounded-md lg:w-[450px] p-1' type="email" name="email" placeholder='Your Email' id="" />
                <input className='mx-auto block my-3 rounded-md lg:w-[450px] p-1' type="text" name="subject" placeholder='Subject' id="" />
                <textarea className='mx-auto block rounded-md lg:w-[450px] p-1' name="message" id="" cols="30" rows="4" placeholder='Your Message'></textarea>
                <div className='text-center mt-3'>
                    <button className="btn btn-primary text-white bg-gradient-to-r from-secondary to-primary">Submit Us</button>
                </div>
            </div>
        </div>
    );
};

export default Contact;