import {Container, Info, User, ProductDiv, ProductInfo, ProductImg, Amount, Address, Status} from "../styles/Orders.styles.jsx";

const Order = ({ order }) => {
    return (
    <Container>
        <Info>
            <User>{order.userId}</User>
            <ProductDiv>
            {order.products.map((product, index) => (
                <div key={index}>
                    <ProductInfo>{product.title}</ProductInfo>
                    <ProductImg src={product.img}/>
                    <ProductInfo>{product.quantity}</ProductInfo>
                </div>
            ))}
            </ProductDiv>
            <Amount>{order.amount}</Amount>
            <Address>{order.date}</Address>
            <Status>{order.status}</Status>
        </Info> 
    </Container> 
    )
}

export default Order