import {Container, FilterContainer, Filter, FilterText, Select, Option, EmptyContainer} from "../styles/ItemList.styles.jsx";
import order from "./Order";
import { useState } from "react";
const Orders = () => {
    const [sort, setSort] = useState("Last 30 Days");
    return (
    <Container>
    <FilterContainer>
    <Filter>
            <FilterText>Sort By:</FilterText>
            <Select name="sort" onChange = {(e) => setSort(e.target.value)}>
            {/*Set up Date Access*/}<Option value="ascending">Last 30 Days</Option>
            {/*Set up Date Access*/}<Option value="descending">Last 90 Days</Option>
            <Option value="ascending">Price Ascending</Option>
            <Option value="descending">Price Descending</Option>
            <Option value="descending">User ID</Option>
            
            </Select>
    </Filter>
    </FilterContainer>
    <h2>
     {/*Orders Go here*/}
    </h2>

    </Container>
        
    )
}

export default Orders