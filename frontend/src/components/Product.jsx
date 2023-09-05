import { SearchOutlined, ShoppingCartOutlined, StarBorderOutlined } from "@material-ui/icons"
import styled from "styled-components"

// This file is for handling the individual product items and how they
// will appear and their containers.

const Info = styled.div`
    opacity: 0;
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    background-color: transparent;
    z-index: 3;
    display: flex;
    align-items: center;
    justify-content: center;

`

const Container = styled.div`
    flex: 1;
    margin: 5px;
    min-width: 280px;
    height: 350px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #f5fbfd;
    position: relative;

    &:hover ${Info}{
        opacity: 1;
    }
`

const Image = styled.img`
    height: 100%;
    z-index: 2;
    object-fit: cover;
`

const Icon = styled.div`
    width: 50px;
    height: 50px;
    border-radius: 50%;
    background-color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 10px;
    transition: all .5s ease;

    &:hover{
        background-color: lightgray;
        transform: scale(1.2);
    }
`

const Button = styled.button`
    padding: 10px;
    font-size: 20px;
    background-color: white;
    border-color: #c04547;
    cursor: pointer;
    color: #c04547;
    transition: all .5s ease;
    border-radius: 15px;
    z-index: 4;

    &:hover {
        transform: scale(1.1);
        background-color: #c04547;
        color: white;
    }
`


const Product = ({item}) => {
    return (
        <Container>
            <Image src={item.img}/>
            <Info>
                <Button>Quick Add</Button>
                <Icon>
                    <SearchOutlined/>
                </Icon>
            </Info>
        </Container>
    )
}

export default Product