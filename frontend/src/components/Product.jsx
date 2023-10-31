import { Link } from "react-router-dom";
import { Container, Image, Info, Title, Name, Price, Quantity, Button } from "../styles/product.styles.jsx";

const Product = ({ item }) => {
  return (
    <Container>
      <Image src={item.img} />
      <Info>
        <Name>{item.name}</Name>
        <Price>${item.price}</Price>
        <Quantity>Quantity: {item.quantity}</Quantity>
        <Link to={`/products/${item._id}`}>
          <Button>View Details</Button>
        </Link>
      </Info>
    </Container>
  );
};

export default Product;