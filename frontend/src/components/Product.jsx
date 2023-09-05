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
    padding: 15px;
    margin: 50px;
    width: 280px;
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
    z-index: 2;
    height: 250px;
    object-fit: contain;
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

const IconButton = styled.button`
    width: 50px;
    height: 50px;
    border-radius: 50%;
    background-color: white;
    color: #c04547;
    border-color: #c04547;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 10px;
    transition: all .5s ease;

    &:hover{
        background-color: #c04547;
        color: white;
        transform: scale(1.2);
    }
`


const Product = ({item}) => {
    return (
        <Container>
            <Image src={item.img}/>
            <Info>
                <Button>Quick Add</Button>
                <IconButton>
                    <SearchOutlined/>
                </IconButton>
            </Info>
        </Container>
    )
}

export default Product