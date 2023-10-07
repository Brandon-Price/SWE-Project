import {Search, LocalMallOutlined, ExitToApp} from '@material-ui/icons';
import {Badge} from '@material-ui/core';
import { useDispatch, useSelector } from "react-redux";
import { logout } from '../redux/userSlice.js';
import axios from 'axios';
import { useLocation, useNavigate } from "react-router-dom";

import {Title, MenuLink, Container, Wrapper, Left, SearchContainer, Input, Center, Right, Logo, Menu, Line} from "../styles/Navbar.styles.jsx"
import { updateFilter } from '../redux/searchFilter.js';

// Its also a sticky navbar so when you scroll it follows

// Creating navigation bar
const Navbar = () => {
    const dispatch = useDispatch();
    const user = useSelector((state) => state.user.currentUser);
    const cartItems = useSelector(state => state.cart.quantity);
    const searchFilter = useSelector(state => state.searchFilter)

    // handle search routing
    let navigate = useNavigate();
    let location = useLocation();

    const handleProductRoute = (passedSearchFilter) => {
            dispatch(updateFilter(passedSearchFilter));
            let path = '/products/';
            navigate(path, {state: {searchFilter: passedSearchFilter}});
    };

    const handleLogout = (e) => {
        e.preventDefault();
        dispatch(logout())
    };

    // search bar enter key handler, passes searchFilter prop to products page
    const handleSearch = (e) => {
        if (e.key === "Enter") {
            // handle move to itemlist
            console.log("moving to products page, filter: " + e.target.value);
            handleProductRoute(e.target.value);
        }
    };

    return (
        <Container>
            <Wrapper>
                <Left>
                <MenuLink to="/">
                    <Logo>TBD</Logo>
                </MenuLink>
                </Left>
                <Center>
                    <SearchContainer>
                        <Search style ={{color: "gray", fontSize:20}}/>
                        <Line/>
                        <Input placeholder = "Search" onKeyDown={(e) => handleSearch(e)}/>
                    </SearchContainer>
                </Center>
                <Right>
                    {user ? (<Menu><Title>Hello {user.username}</Title><ExitToApp onClick={handleLogout}/></Menu>) : (<MenuLink to="/account-log-in-sign-up">
                        <Menu>Register/Sign In</Menu>
                    </MenuLink>)}
                    <Menu>
                        <MenuLink to="/cart">
                            <Badge badgeContent={cartItems} color = "primary" overlap="rectangular" style={{ padding: '1px' }}>
                                <LocalMallOutlined/>
                            </Badge>
                        </MenuLink>
                    </Menu>
                </Right>
            </Wrapper>
        </Container>
    )
}

export default Navbar