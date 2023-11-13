import styled from "styled-components"

export const Container = styled.div`
  border: 10px solid #00704a;
   padding: 0px;
   margin: 50px;
`


export const Info = styled.div`
  display: flex;
  flex-direction: row;
`;


export const User = styled.h2`
  text-align: center;
  font-size: 40px;
  margin: 10px 0;
`;

export const ProductDiv = styled.div`

padding: 100px;
`;

export const ProductInfo = styled.p`
font-weight: 1000;
align-items: center;
text-align: left;
  font-size: 30px;
`

export const ProductImg = styled.img`
border 9px solid #00704a;
`


export const OrderDiv = styled.div`
padding 250px;
align-items: center;
text-align: center;
`;

export const Amount = styled.p`
padding: 20px;
text-align: center;
  font-size: 30px;
`;

export const Address = styled.p`
padding: 20px;
text-align: center;
  font-size: 30px;
`;

export const Status = styled.p`
padding: 20px;
text-align: center;
  font-size: 30px;
`;

export const Thanks = styled.p`
padding: 20px;
text-align: center;
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