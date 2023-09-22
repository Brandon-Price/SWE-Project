import { SearchOutlined } from "@material-ui/icons"
import {Info, Container, Image, IconButton} from "../styles/product.styles.jsx";
import { Link } from "react-router-dom";
// This file is for handling the individual product items and how they
// will appear and their containers.

const Product = ({item}) => {
    return (
        <Container>
            <Image src={item.img}/>
            <Info>
                <Link to={`/products/${item._id}`}>
                    <IconButton>
                        <SearchOutlined/>
                    </IconButton>
                </Link>
            </Info>
        </Container>
    )
}

export default Product