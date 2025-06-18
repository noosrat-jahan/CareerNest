import BenifitSection from '@/components/sections/BenifitSection';
import Faq from '@/components/sections/Faq';
import Hero from '@/components/sections/Hero';
import React from 'react';
import Reviews from '@/components/sections/Reviews';

const Home = () => {
    return (
        <div >
            <Hero></Hero>
            <BenifitSection></BenifitSection>
            <Reviews></Reviews>
            <Faq></Faq>
        </div>
    );
};

export default Home;