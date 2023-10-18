import {InfoOutlined} from '@material-ui/icons';
import { useDispatch, useSelector } from "react-redux";
import { updateFilter } from '../redux/searchFilter.js';
import {MenuLink, Container, Wrapper, Left, Right, Menu, Menu2} from "../styles/SubHeader.styles";


// The subheader contains the pages to go around the site
const SubHeader = () => {
    const dispatch = useDispatch();
    const searchFilter = useSelector(state => state.searchFilter)

    const handleProductClick = () => {
        dispatch(updateFilter(""));
    };

    return (
        <Container>
            <Wrapper>
                <Left>
                    <MenuLink to="/">
                        <Menu>Home</Menu>
                    </MenuLink>
                    <MenuLink to="/products/">
                        <Menu onClick={() => handleProductClick()}>Products</Menu>
                    </MenuLink>
                    <MenuLink to="/order-history">
                        <Menu>Order History</Menu>
                    </MenuLink>
                </Left>
                <Right>
                    <InfoOutlined style ={{color: "black", fontSize:20}}/>
                    <MenuLink to="/help-center">
                        <Menu2>Help Center</Menu2>
                    </MenuLink>
                </Right>
            </Wrapper>
        </Container>
    );
};

export default SubHeader