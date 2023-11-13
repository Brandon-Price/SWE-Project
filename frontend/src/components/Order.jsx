import {Container, Info, User, ProductDiv, ProductInfo, ProductImg, OrderDiv, Amount, Address, Status, Thanks} from "../styles/Orders.styles.jsx";

const Order = ({ order }) => {
    return (
    <Container>
        <User>User Number: {order.userId}</User>
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
            <Amount>Subtotal: ${order.amount}</Amount>
            <Address>Date: {order.date}</Address>
            <Status>Order Status:{order.status}</Status>
            <Thanks>Thank you for Shopping with us!</Thanks>
            </OrderDiv>
        </Info> 
    </Container> 
    )
}

export default Order