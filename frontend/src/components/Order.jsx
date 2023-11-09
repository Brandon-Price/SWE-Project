import {Container, Info, User, Product, Amount, Address, Status} from "../styles/Orders.styles.jsx";

const Order = ({ order }) => {
    return (
    <Container>
    <Info>
        <User>{order.userID}</User>
        <Product>{order.products}</Product>
        <Amount>{order.amount}</Amount>
        <Address>{order.address}</Address>
        <Status>{order.status}</Status>
    </Info> 
    </Container> 
    )
}

export default Order