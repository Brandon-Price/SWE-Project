import {Link} from "react-router-dom";
import {Container, Info, User, Product, Amount, Address, Status, Button} from "../styles/Orders.styles.jsx";



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

    /*userId:{type: String, required:true},
        products:[
            {
                productId:{
                    type:String
                },
                quantity:{
                    type: Number,
                    default: 1
                },
            },
        ],
        amount: {type: Number, required: true},
        address: {type: Object, required:true},
        status: {type: String, default:"Ordered"}
        */
}

export default Order