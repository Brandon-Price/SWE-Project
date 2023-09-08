import Navbar from "../components/Navbar";
import SubHeader from "../components/SubHeader";
import Footer from "../components/Footer";
import Products from "../components/Products";
import {Container, Header, FilterContainer, Filter, FilterText, Select, Option} from "../styles/ItemList.styles";
import { useState } from "react";

// Will be handling the item filters and their containers

const ItemList = () => {
    const [filter, setFilter] = useState({});

    const handleFilter = (event) => {
        const value = event.target.value;
        setFilter({
            ...filter,
            [event.targe.name]: value,
        });
    };

    console.log(filter);

    return(
        <Container>
            <Navbar/>
            <SubHeader/>
            <Header>Mugs</Header>
            <FilterContainer>
                <Filter>
                    <FilterText>Product Filter:</FilterText>
                    <Select onChange={handleFilter}>
                        <Option disabled>Filter</Option>
                        <Option>Country</Option>
                        <Option>City</Option>
                    </Select>
                </Filter>
                <Filter>
                    <FilterText>Product Sort:</FilterText>
                    <Select>
                        <Option>Price Ascending</Option>
                        <Option>Price Descending</Option>
                    </Select>
                </Filter>
            </FilterContainer>
            <Products filter={filter}/>
            <Footer/>
        </Container>
    )
}

export default ItemList