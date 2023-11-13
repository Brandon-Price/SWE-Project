import styled from "styled-components"

export const Container = styled.div`
   padding: 15px;
   margin: 50px;
`


export const Info = styled.div`
  max-width: 100%;
  text-align: left;
  padding: 10px;
`;


export const User = styled.h2`
  font-size: 40px;
  margin: 10px 0;
`;

export const ProductDiv = styled.div`
  text-align: left;
`;

export const ProductInfo = styled.p`
  float: left;
  font-size: 30px;
  padding-right: 250px;
`

export const ProductImg = styled.img`
max-width: 100%;
height: auto;
display: block;
margin: 0 auto;
  
`

export const Amount = styled.p`
  font-size: 30px;
`;

export const Address = styled.p`
  font-size: 30px;
`;

export const Status = styled.p`
  font-size: 30px;
`;

export const Button = styled.button`
  padding: 10px 20px;
  font-size: 16px;
  background-color: #00704A;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease-in-out;

  &:hover {
    background-color: #006400;
  }
`;