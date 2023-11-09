import {Container, Info, User, Product, Amount, Address, Status} from "../styles/Orders.styles.jsx";

const Order = ({ order }) => {
    return (
    <Container>
        <Info>
            <User>{order.userId}</User>
            {/* <Product>{order.products[]}</Product> */}
            <Amount>{order.amount}</Amount>
            <Address>{order.date}</Address>
            <Status>{order.status}</Status>
        </Info> 
    </Container> 
    )
}

export default Order