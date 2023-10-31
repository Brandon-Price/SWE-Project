import SubHeader from '../components/SubHeader';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import React, { useState, useEffect } from 'react';
import Slider from '../components/Slider';
import axios from 'axios';

function Home() {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:5000/api/products')
            .then((response) => {
                setProducts(response.data);
            })
            .catch((error) => {
                console.error('Error fetching product data', error);
            });
    }, []);

    return (
        <div>
            <Navbar />
            <SubHeader />
            <Slider products={products} />
            <Footer />
        </div>
    );
}

export default Home;