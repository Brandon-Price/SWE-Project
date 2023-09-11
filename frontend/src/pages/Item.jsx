import Navbar from "../components/Navbar";
import SubHeader from "../components/SubHeader";
import Footer from "../components/Footer";
import { useState, useEffect } from "react";
import { Add, Remove } from "@material-ui/icons";
import { useLocation } from "react-router-dom";
import { publicRequest } from "../request";
import { addProduct } from "../redux/cartRedux";
import { useDispatch } from "react-redux";
import {Container, Wrapper, ImgContainer, InfoContainer, Image, Title, Desc, Price, AddtoCart, AmountContainer, Amount, Button, Quantity} from "../styles/Item.styles"

const Item = () => {
    // Location is for looking at the url and parsing it for the id
    const location = useLocation();
    const id = location.pathname.split("/")[2];
    const [items, setItems] = useState({});
    const [itemQuanitity, setQuantity] = useState(1);
    const dispatch = useDispatch();

    // Looks for the item in our api route with its id that we parse from the url
    useEffect(() => {
        const getItem = async () =>{
            try{
                const res = await publicRequest.get("products/find/"+ id)
                setItems(res.data);
            }catch{}
        }
        getItem();
      }, [id]);

    // Handling the visuals of adding to cart
    // Makes sure you can't go below 1 as that wouldn't make sense
    const handleItemQuantity = (type) => {
        if(type === "decrease")
        {
            itemQuanitity > 1 && setQuantity(itemQuanitity - 1);
        }
        else if (type === "increase") {
            setQuantity(itemQuanitity + 1);
        }
    };

    // Adds items to cart
    const handleButtonClick = () => {
        dispatch(
            addProduct({... items, itemQuanitity})
        )
    }

    return (
        <Container>
            <Navbar/>
            <SubHeader/>
            <Wrapper>
                <ImgContainer>
                    <Image src={items.img} />
                </ImgContainer>
                <InfoContainer>
                    <Title>{items.title}</Title>
                    <Desc>{items.desc}</Desc>
                    <Price>${items.price}</Price>
                    <br/>
                    <Quantity>Quantity Left: {items.quantity}</Quantity>
                    <AddtoCart>
                        <AmountContainer>
                            <Remove onClick={() =>handleItemQuantity("decrease")}/>
                            <Amount>{itemQuanitity}</Amount>
                            <Add onClick={() =>handleItemQuantity("increase")}/>
                        </AmountContainer>
                    </AddtoCart>
                    <Button onClick={handleButtonClick}>Add to Cart</Button>
                </InfoContainer>
            </Wrapper>
            <Footer/>
        </Container>
    )
}

export default Item