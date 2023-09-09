import Navbar from "../components/Navbar";
import SubHeader from "../components/SubHeader";
import Footer from "../components/Footer";
import Products from "../components/Products";
import {Container, Header, FilterContainer, Filter, FilterText, Select, Option} from "../styles/ItemList.styles";
import { useState } from "react";
//import { useLocation } from "react-router-dom";

// Will be handling the item filters and their containers

const ItemList = () => {
    const [filter, setFilter] = useState({});
    const [sort, setSort] = useState("Price Ascending");

    const handleFilter = (e) => {
        const value = e.target.value;
        setFilter({
            ...filter,
            [e.target.name]: value,
        });
    };

    return(
        <Container>
            <Navbar/>
            <SubHeader/>
            <Header>Mugs</Header>
            <FilterContainer>
                <Filter>
                    <FilterText>Product Filter:</FilterText>
                    <Select name="category" onChange={handleFilter}>
                        <Option hidden>Filter</Option>
                        <Option value="country">Country</Option>
                        <Option value="city">City</Option>
                    </Select>
                </Filter>
                <Filter>
                    <FilterText>Product Sort:</FilterText>
                    <Select name="sort" onChange = {(e) => setSort(e.target.value)}>
                        <Option value="ascending">Price Ascending</Option>
                        <Option value="descending">Price Descending</Option>
                    </Select>
                </Filter>
            </FilterContainer>
            <Products filter={filter} sort={sort}/>
            <Footer/>
        </Container>
    )
}

export default ItemList