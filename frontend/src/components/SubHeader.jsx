import {InfoOutlined} from '@material-ui/icons';
import {Container, Wrapper, Left, Right, Menu, Menu2} from "../styles/SubHeader.styles";
import { Link } from 'react-router-dom';

// The subheader contains the pages to go around the site


const SubHeader = () => {
    return (
        <Container>
            <Wrapper>
                <Left>
                    <Link to="/">
                        <Menu>Home</Menu>
                    </Link>
                    <Link to="/products">
                        <Menu>Products</Menu>
                    </Link>
                    <Link>
                        <Menu>Order History</Menu>
                    </Link>
                </Left>
                <Right>
                    <InfoOutlined style ={{color: "black", fontSize:20}}/>
                    <Menu2>Help Center</Menu2>
                </Right>
            </Wrapper>
        </Container>
    );
};

export default SubHeader