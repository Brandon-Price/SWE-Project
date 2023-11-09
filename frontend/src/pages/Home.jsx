import SubHeader from '../components/SubHeader';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import React, { useState, useEffect } from 'react';
import Slider from '../components/Slider';
import axios from 'axios';
import {Container, ImageContainer} from '../styles/Home.style.jsx';

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
        <Container>
            <Navbar />
            <SubHeader />
            <ImageContainer>
                
            </ImageContainer>
            <Slider products={products} />
            <Footer />
        </Container>
    );
}

export default Home;