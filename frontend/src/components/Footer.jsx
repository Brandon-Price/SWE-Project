import styled from "styled-components";
import { Facebook, Twitter, Instagram } from "@material-ui/icons";

const Container = styled.div`
    display: flex;
    background-color: #555555;
`
const Left = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    padding: 20px;
`


const UsefulLinks = styled.h3`
    margin-bottom: 10px;
    color: white;
`

const Links = styled.ul`
    margin: 0;
    padding: 0;
    list-style: none;
    display: flex;
    flex-wrap: wrap;
`

const LinksList = styled.li`
    width: 40%;
    margin-bottom: 0px;
    color: white;
`

const Logo = styled.h1`
    color: white;
    display: flex;
    align-items: center;
    margin: 20px;
`

const SocialContainer = styled.div`
    display: flex;
`

const SocialIcon = styled.div`
    width: 40px;
    height: 40px;
    border-radius: 40%;
    color: white;
    background-color: #${props => props.color};
    display: flex;
    align-items: center;
    justify-content: center;
    margin-left: 20px;
`

const Right = styled.div`
    display: flex;
    align-items: end;
    justify-content: flex-end;
    flex-direction: column;
    padding: 20px;
`

const Center = styled.div`
    flex: 1;
`

const Footer = () => {
    return (
        <Container>
            <Left>
                <UsefulLinks>Site Links</UsefulLinks>
                <Links>
                    <LinksList>Home</LinksList>
                    <LinksList>Products</LinksList>
                    <LinksList>Order History</LinksList>
                </Links>
            </Left>
            <Center>
                <Logo>LOGO</Logo>
            </Center>
            <Right>
            <Logo>TBD</Logo>
                <SocialContainer>
                    <SocialIcon color = "3B5999">
                        <Facebook/>
                    </SocialIcon>
                    <SocialIcon color = "55ACEE">
                        <Twitter/>
                    </SocialIcon>
                    <SocialIcon color = "E4405F">
                        <Instagram/>
                    </SocialIcon>
                </SocialContainer>
            </Right>
        </Container>
    )
}

export default Footer