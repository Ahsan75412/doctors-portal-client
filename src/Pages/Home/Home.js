import React from 'react';
import Banner from './Banner';
import Info from './Info';
import MakeAppointment from './MakeAppointment';
import ServiceBanner from './ServiceBanner';
import Services from './Services';


const Home = () => {
    return (
        <div className='px-12'>
            <Banner></Banner>
            <Info></Info>
            <Services></Services>
            <ServiceBanner></ServiceBanner>
            <MakeAppointment></MakeAppointment>
        </div>
    );
};

export default Home;