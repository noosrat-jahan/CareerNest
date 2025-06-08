import React from 'react';
import notfound from '../assets/notfound.jpg'
import { Link } from 'react-router-dom';
const NotFound = () => {
    return (
        <div className='flex justify-around items-center'>
            <Link to="/"><button className='bg-card-foreground text-background rounded px-5 py-2'>Back to Home</button></Link>
            <img src={notfound} alt="" className='w-2/3' />            
        </div>
    );
};

export default NotFound;