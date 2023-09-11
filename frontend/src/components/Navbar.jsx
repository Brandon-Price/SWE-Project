import React from "react";
import {Search, ShoppingCartOutlined, } from '@material-ui/icons';
import {Badge} from '@material-ui/core';
import {useSelector} from "react-redux";
import {MenuLink, Container, Wrapper, Left, SearchContainer, Input, Center, Right, Logo, Menu} from "../styles/Navbar.styles.jsx"


// Using style components for the site
// Don't need a style js file
// Navbar has the sites different pages
// Its also a sticky navbar so when you scroll it follows

// Creating navigation bar
const Navbar = () => {
    const cartItems = useSelector(state => state.cart.quantity);
    console.log(cartItems)

    return (
        <Container>
            <Wrapper>
                <Left>
                    <Logo>TBD</Logo>
                </Left>
                <Center>
                    <SearchContainer>
                        <Search style ={{color: "gray", fontSize:20}}/>
                        <Input placeholder = "Search"/>
                    </SearchContainer>
                </Center>
                <Right>
                    <MenuLink to="/account-log-in-sign-up">
                        <Menu>Register/Sign In</Menu>
                    </MenuLink>
                    <Menu>
                        <MenuLink to="/cart">
                            <Badge badgeContent={cartItems} color = "primary" overlap="rectangular">
                                <ShoppingCartOutlined/>
                            </Badge>
                        </MenuLink>
                    </Menu>
                </Right>
            </Wrapper>
        </Container>
    )
}

export default Navbar