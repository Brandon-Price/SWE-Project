import {Link} from "react-router-dom";
import {Container,  Image, Info, OrderNumber, Name, Price, Quantity, Address} from "../styles/Orders.styles.jsx";


const Order = ({item}) => {
    
    return (
    <Container>
    <OrderNumber/>
    <Info>
        <Image src = {item.img}/>
        <Name>{item.name}</Name>
        <Quantity>{/*Number of Items Ordered*/}</Quantity>
        <Price>${item.price} {/*Times Quantity Ordered*/}</Price>
    </Info> 
    </Container> 
    )
}

export default Order