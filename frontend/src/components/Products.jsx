import styled from "styled-components";
import Product from "./Product";
//import { products } from "../data";
import axios from "axios";
import { useState, useEffect } from "react";


// Focuses on handling and organzing the product display page

const Container = styled.div`
    padding: 20px;
    display: flex;
    flex-wrap: wrap;
    margin-bottom: 200px;
    justify-content: space-between;
    overflow:hidden;
`

const Products = ({filter, sort}) => {
    
    const [products, setProducts] = useState([]);
    const [filteredProducts, setFilteredProducts] = useState([]);

    console.log(filter, sort);
    useEffect(()=>{
        const getProducts = async ()=>{
           try{
            const res = await axios.get("http://localhost:5000/api/products");
            console.log(res)
           } catch(err){}
           getProducts();
        }
    }, [filter]);

    return (
        <Container>
            {products.map((item) => (
                <Product item={item} key={item.id}/>
            ))}
        </Container>
    )
}

export default Products