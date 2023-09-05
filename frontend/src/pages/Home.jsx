import React from 'react';
import SubHeader from '../components/SubHeader';
import Navbar from '../components/Navbar';
import Slider from '../components/Slider';
import Footer from '../components/Footer';

const Home = () => {
    return (
        <div>
            <Navbar />
            <SubHeader />
            <Slider />
            <Footer/>
        </div>
    )
}

export default Home