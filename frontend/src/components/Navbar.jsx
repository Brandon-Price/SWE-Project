import React from "react";
import styled from "styled-components";
import {Search, ShoppingCartOutlined, } from '@material-ui/icons';
import {Badge} from '@material-ui/core';

// Using style components for the site
// Don't need a style js file
// Navbar has the sites different pages
// Its also a sticky navbar so when you scroll it follows

const Container = styled.nav`
    position: sticky;
    top: 0;
    z-index: 999;
    height: 10%;
    width: 100%;
    background-color: white;
`

const Wrapper = styled.div`
    padding: 10px 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
`

const Left = styled.div`
    flex:1;
    display: flex;
    align-items: center;
    padding: 0px 11px;
`

const SearchContainer = styled.div`
    border: .5px solid lightgray;
    border-radius: 20px;
    display: flex;
    align-items: center;
    width: 360px;
    height: 24px;
    margin-left: 25px;
    padding: 5px;
    background: #f2f2f2;
    transition: all .3s ease;
`

const Input = styled.input`
    border: none;
    height: 100%;
    width: 100%;
    color: gray;
    outline: none;
    font-size: 16px;
    background-color: transparent; 
`

const Center = styled.div`
    display: flex;
    text-align: center;
`

const Right = styled.div`
    flex:1;
    display: flex;
    align-items: center;
    justify-content: flex-end;
`

const Logo = styled.h1`
    font-weight:bold;
`

const Menu = styled.div`
    font-size: 16px;
    cursor: pointer;
    margin-left: 20px;
`

// Creating navigation bar
const Navbar = () => {
    return (
        <Container>
            <Wrapper>
                <Left>
                    <Logo>TBD</Logo>
                </Left>
                <Center>
                    <SearchContainer>
                        <Search style ={{color: "gray", fontSize:20}}/>
                        <Input/>
                    </SearchContainer>
                </Center>
                <Right>
                    <Menu>Register/Sign In</Menu>
                    <Menu>
                        <Badge badgeContent={4} color = "primary">
                            <ShoppingCartOutlined/>
                        </Badge>
                    </Menu>
                </Right>
            </Wrapper>
        </Container>
    )
}

export default Navbar