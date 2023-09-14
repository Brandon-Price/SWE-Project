import React, { useState } from "react";
import {Search, ShoppingCartOutlined, } from '@material-ui/icons';
import {Badge} from '@material-ui/core';
import {useSelector} from "react-redux";
import {Button, Title, MenuLink, Container, Wrapper, Left, SearchContainer, Input, Center, Right, Logo, Menu, Line} from "../styles/Navbar.styles.jsx"


// Using style components for the site
// Don't need a style js file
// Navbar has the sites different pages
// Its also a sticky navbar so when you scroll it follows

// Creating navigation bar
const Navbar = ({ user, setUser }) => {
    const cartItems = useSelector(state => state.cart.quantity);

    const handleLogout = () => {
        console.log("logging user out...");
        setUser(false);
    };

    return (
        <Container>
            <Wrapper>
                <Left>
                    <Logo>TBD</Logo>
                </Left>
                <Center>
                    <SearchContainer>
                        <Search style ={{color: "gray", fontSize:20}}/>
                        <Line/>
                        <Input placeholder = "Search"/>
                    </SearchContainer>
                </Center>
                <Right>
                    {user && <Button onClick={() => handleLogout()}>Logout</Button>}
                    {user ? (<Title>Hello "namehere"</Title>) : (<MenuLink to="/account-log-in-sign-up">
                        <Menu>Register/Sign In</Menu>
                    </MenuLink>)}
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