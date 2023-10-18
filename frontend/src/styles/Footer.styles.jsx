import styled from "styled-components";
import { Link } from 'react-router-dom';

export const Container = styled.footer`
  background-color: #00704a; /* Starbucks green color */
  color: #fff; /* White text */
  padding: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
`;

export const Left = styled.div`
  flex: 1;
  padding: 10px;
`;

export const UsefulLinks = styled.h3`
  margin: 10px 0;
  font-size: 18px;
`;

export const Links = styled.ul`
  list-style: none;
  padding: 0;
`;

export const FooterLink = styled(Link)`
  color: #fff;
  text-decoration: none;
  display: block;
  margin: 5px 0;
  font-size: 16px;
  transition: color 0.3s;
  &:hover {
    color: #000; /* Black on hover */
  }
`;

export const Logo = styled.h1`
  font-size: 24px;
  margin: 10px 0;
  font-weight: bold;
`;

export const SocialContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

export const SocialIcon = styled.div`
  font-size: 24px;
  color: #fff;
  cursor: pointer;
  transition: color 0.3s;
  &:hover {
    color: #000; /* Black on hover */
  }
`;

export const Right = styled.div`
  flex: 1;
  display: flex;
  justify-content: flex-end;
`;

export const Center = styled.div`
  flex: 1;
  text-align: center;
`;