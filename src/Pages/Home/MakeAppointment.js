import React from 'react';
import doctor from '../../assets/images/doctor.png';
import appointment from '../../assets/images/appointment.png';
import PrimaryButton from '../Shared/PrimaryButton';

const MakeAppointment = () => {
    return (
        <section style={{
           background: `url(${appointment})` 
        }} 
        className='flex justify-center items-center'>
            <div className='flex-1 hidden lg:block'>
                <img className='mt-[-100px]' src={doctor} alt="" />
            </div>
            <div className='flex-1'>
                <h3 className='text-xl text-primary font-bold'>Appointment</h3>
                <h2 className='text-3xl text-white'>Make an Appointment Today</h2>
                <p className='text-white py-8' >Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum, error eveniet. Cum, dignissimos? Aperiam voluptatum eveniet sunt a, quaerat harum molestiae sint doloribus nostrum odit alias autem fugiat culpa eum obcaecati reiciendis reprehenderit expedita delectus veritatis amet earum adipisci quasi!</p>

                <PrimaryButton>Get Started</PrimaryButton>
            </div>
        </section>
    );
};

export default MakeAppointment;