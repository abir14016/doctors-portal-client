import React from 'react';
import doctor from '../../assets/images/doctor-small.png';
import appointment from '../../assets/images/appointment.png';

const MakeAppointment = () => {
    return (
        <div style={
            { background: `url(${appointment})` }
        } className='lg:flex justify-center items-center'>
            <div className="flex-1 hidden lg:block">
                <img className='mt-[-120px]' src={doctor} alt="doctor" />
            </div>
            <div className='flex-1'>
                <p className='font-bold text-primary'>Appointment</p>
                <h2 className='text-3xl text-white'>Make an appointment today</h2>
                <p className='text-white'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eligendi, exercitationem tenetur veritatis omnis amet quia illo voluptas maiores animi praesentium mollitia reprehenderit! Nemo ullam voluptates labore sunt quas accusantium possimus omnis error architecto culpa? Harum, sed voluptate sunt autem asperiores, soluta aliquam perspiciatis possimus hic provident ipsum, repudiandae voluptatibus facere maxime vero labore quam commodi culpa deleniti. Vitae totam, voluptatem qui vero veritatis odio molestiae deserunt cumque iure tenetur eligendi fuga fugit esse numquam dolore, ad aliquid velit enim natus et, aliquam hic ipsam rem? Sint, eaque fugit distinctio, quidem in illum perspiciatis nesciunt rem repudiandae, officiis non libero ducimus?</p>
                <button className='btn btn-primary'>GET STARTED</button>
            </div>
        </div>
    );
};

export default MakeAppointment;