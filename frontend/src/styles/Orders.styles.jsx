import styled from "styled-components"

export const Container = styled.div`
   padding: 15px;
   margin: 50px;
`


export const Info = styled.div`
  width: 100%;
  text-align: center;
  padding: 10px;
`;


export const User = styled.h2`
  font-size: 18px;
  margin: 10px 0;
`;

export const ProductDiv = styled.div`
  
`;

export const ProductInfo = styled.p`
  font-size: 16px;
`

export const ProductImg = styled.img`

`

export const Amount = styled.p`
  font-size: 16px;
`;

export const Address = styled.p`
  font-size: 16px;
`;

export const Status = styled.p`
  font-size: 16px;
`;

export const Button = styled.button`
  padding: 10px 20px;
  font-size: 16px;
  background-color: #008000;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease-in-out;

  &:hover {
    background-color: #006400;
  }
`;