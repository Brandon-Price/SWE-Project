import styled from "styled-components";
import Navbar from "../components/Navbar";
import SubHeader from "../components/SubHeader";
import Footer from "../components/Footer";
import Products from "../components/Products";

// Will be handling the item filters and their containers

const Container = styled.div`
    
`

const Header = styled.h1`
    margin: 20px;
`

const FilterContainer = styled.div`
    display: flex;
    justify-content: space-between;
`

const Filter = styled.div`
    margin: 20px;
`

const ItemList = () => {
    return(
        <Container>
            <Navbar/>
            <SubHeader/>
            <Header>Mugs</Header>
            <FilterContainer>
                <Filter>f1</Filter>
                <Filter>f2</Filter>
                <Filter>f3</Filter>
            </FilterContainer>
            <Products/>
            <Footer/>
        </Container>
    )
}

export default ItemList