import {BottomContainer, Container, EmptyContainer, MiddleContainer, ProductContainer, ProductImg, ProductInfo, TopContainer, TopInfo, } from "../styles/Order.styles.jsx";

const Order = ({ order }) => {
    return (
    <Container>
        <TopContainer>
            <TopInfo>Order ID: {order._id}</TopInfo>
            <TopInfo>Order Status: {order.status}</TopInfo>
        </TopContainer>
        <MiddleContainer>
            <ProductContainer>
                {order.products.map((product, index) => (
                    <div style={{display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "center", }} 
                    key={index}>
                        <ProductImg src={product.img}/>
                        <ProductInfo style={{margin: "10px"}} >Item: {product.title} Mug</ProductInfo>
                        <ProductInfo>Quantity: {product.quantity}</ProductInfo>
                    </div>
                ))}
            </ProductContainer>
        </MiddleContainer>
        <EmptyContainer></EmptyContainer>
        <BottomContainer>
            <TopInfo>Ordered On: {order.date}</TopInfo>
            <TopInfo>Order Subtotal: ${order.amount}</TopInfo>
        </BottomContainer>
    </Container> 
    )
}

{/* <Amount>Subtotal: ${order.amount}</Amount>
        <Info>
            <ProductDiv>
            {order.products.map((product, index) => (
                <div key={index}>
                    <ProductInfo>Item: {product.title} Mug</ProductInfo>
                    <ProductInfo>Quantity: {product.quantity}</ProductInfo>
                    <ProductImg src={product.img}/>
                </div>
            ))}
            </ProductDiv>
            <OrderDiv>
            <Address>Date: {order.date}</Address>
            <Status>Order Status:{order.status}</Status>
            </OrderDiv>
</Info>  */}

export default Order