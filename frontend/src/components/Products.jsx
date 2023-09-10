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

const Products = ({cat, filters, sort}) => {
    const [products, setProducts] = useState([]);
    const [filterSelect, setFilters] = useState([]);

    // Grabs all products
    useEffect(() => {
        const getProducts = async () => {
          try {
            const res = await axios.get("http://localhost:5000/api/products");
            setProducts(res.data);
          } catch (err) {}
        };
        getProducts();
      }, []);

    // useEffect to handle item filter, so by country or city
    // this doesn't work properly
    // TODO
    useEffect(() => { 
        setFilters(
            products.filter((item) =>
                Object.entries(filters).every(([key, value]) =>
                    item[key].includes(value)
                )
            )
        );
    }, [products, filters]);

    // Sorting by item prices ascending and descending
    useEffect(() => {
        if (sort === "ascending") {
          setFilters((prev) =>
            [...prev].sort((a, b) => a.price - b.price)
          );
        } else {
          setFilters((prev) =>
            [...prev].sort((a, b) => b.price - a.price)
          );
        }
      }, [sort]);

    return (
        <Container>
                 {filters
                    ? filterSelect.map((item) => <Product item={item} key={item._id} />)
                    : products
                        .map((item) => <Product item={item} key={item._id} />)}
        </Container>
    )
}

export default Products