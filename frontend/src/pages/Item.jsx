import Navbar from "../components/Navbar";
import SubHeader from "../components/SubHeader";
import Footer from "../components/Footer";
import { useState, useEffect } from "react";
import {Add, Remove } from "@material-ui/icons";
import { useLocation } from "react-router-dom";
import { publicRequest } from "../request";
import {Container, Wrapper, ImgContainer, InfoContainer, Image, Title, Desc, Price, AddtoCart, AmountContainer, Amount, Button} from "../styles/Item.styles"

const Item = () => {
    const location = useLocation();
    const id = location.pathname.split("/")[2];
    const [items, setItems] = useState({});

    useEffect(() => {
        const getItem = async () =>{
            try{
                const res = await publicRequest.get("products/find/"+ id)
                setItems(res.data);
            }catch{}
        }
        getItem();
      }, [id]);

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
                    <AddtoCart>
                        <AmountContainer>
                            <Remove/>
                            <Amount>1</Amount>
                            <Add/>
                        </AmountContainer>
                    </AddtoCart>
                    <Button>Add to Cart</Button>
                </InfoContainer>
            </Wrapper>
            <Footer/>
        </Container>
    )
}

export default Item