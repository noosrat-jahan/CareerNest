import BenifitSection from '@/components/sections/BenifitSection';
import Faq from '@/components/sections/Faq';
import Hero from '@/components/sections/Hero';
import React from 'react';

const Home = () => {
    return (
        <div >
            <Hero></Hero>
            <BenifitSection></BenifitSection>
            <Faq></Faq>
        </div>
    );
};

export default Home;