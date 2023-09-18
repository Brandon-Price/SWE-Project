import React, { useState } from "react";
import {Search, LocalMallOutlined, ExitToApp} from '@material-ui/icons';
import {Badge} from '@material-ui/core';
import {useSelector} from "react-redux";
import {Button, Title, MenuLink, Container, Wrapper, Left, SearchContainer, Input, Center, Right, Logo, Menu, Line} from "../styles/Navbar.styles.jsx"

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
                    {user && <ExitToApp style={{title: "logout", cursor: "pointer"}} onClick={() => handleLogout()}/>}
                    {user ? (<Title>Hello "namehere"</Title>) : (<MenuLink to="/account-log-in-sign-up">
                        <Menu>Register/Sign In</Menu>
                    </MenuLink>)}
                    <Menu>
                        <MenuLink to="/cart">
                            <Badge badgeContent={cartItems} color = "primary" overlap="rectangular">
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