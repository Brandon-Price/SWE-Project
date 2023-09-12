import Navbar from "../components/Navbar";
import SubHeader from "../components/SubHeader";
import Footer from "../components/Footer";
import { Remove, Add } from "@material-ui/icons";
import {Container, Wrapper, Top, TopTexts, TopText, Title, Bottom, Info, Product, ProductInfo, Image,
    ProductDetails, ProductName, ProductID, ProductPrice, PriceContainer, Quantity, Price, Hr, SmallLine,
    CartSummary, SummaryTitle, SummaryItem, SummaryItemText,
    SummaryItemPrice, Button, EmptyContainer, Line} from "../styles/ShoppingCart.styles";
import { useSelector } from "react-redux";

const ShoppingCart = () => {
    const cart = useSelector(state => state.cart)
    const shipping = 8.99;
    // const discount = (promo === "5OFF" ? 0.05 : free);
    const tax = (cart.total *0.0825).toFixed(2);
    const finalTotal = (cart.total + (cart.total *0.0825)).toFixed(2);

    return (
        <Container>
            <Navbar/>
            <SubHeader/>
            <Wrapper>
                <Title>Your Cart</Title>
                <Line/>
                <Top>
                    <TopTexts>
                        <TopText></TopText>
                    </TopTexts>
                </Top>
                <Bottom>
                    <Info>
                        { cart.products.map(product => (
                        <Product>
                            <ProductInfo>
                                <Image src={product.img}/>
                                <ProductDetails>
                                    <ProductName><b>Item: </b>{product.title}</ProductName>
                                    <ProductID><b>Item ID: </b>{product._id}</ProductID>
                                </ProductDetails>
                            </ProductInfo>
                            <ProductPrice>
                                <PriceContainer>
                                    <Remove/>
                                    <Quantity>{product.quantity}</Quantity>
                                    <Add/>
                                </PriceContainer>
                                <Price>$ {product.price * cart.quantity}</Price>
                            </ProductPrice>
                        </Product>))}
                        <Hr/>
                    </Info>
                    <CartSummary>
                        <SummaryTitle>Order Details</SummaryTitle>
                        <SummaryItem>
                            <SummaryItemText>Subtotal: </SummaryItemText>
                            <SummaryItemPrice>$ {cart.total.toFixed(2)}</SummaryItemPrice>
                        </SummaryItem>
                        <SummaryItem>
                            <SummaryItemText>Flat Rate Shipping: </SummaryItemText>
                            <SummaryItemPrice>$ {shipping}</SummaryItemPrice>
                        </SummaryItem>
                        <SummaryItem>
                            <SummaryItemText>Free Shipping: </SummaryItemText>
                            <SummaryItemPrice>- $ {shipping}</SummaryItemPrice>
                        </SummaryItem>
                        <SummaryItem>
                            <SummaryItemText>Tax: </SummaryItemText>
                            <SummaryItemPrice>$ {tax}</SummaryItemPrice>
                        </SummaryItem>
                        <SummaryItem>
                            <SmallLine/>
                        </SummaryItem>
                        <SummaryItem type= "total">
                            <SummaryItemText>Total: </SummaryItemText>
                            <SummaryItemPrice>$ {finalTotal}</SummaryItemPrice>
                        </SummaryItem>
                        <Button>Continue to Checkout</Button>
                    </CartSummary>
                </Bottom>
            </Wrapper>
            <EmptyContainer></EmptyContainer>
            <Footer/>
        </Container>
    )
}

export default ShoppingCart