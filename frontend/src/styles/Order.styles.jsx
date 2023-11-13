import styled from "styled-components"

export const Container = styled.div`
  border: 3px solid gray;
  border-radius: 25px;
  min-height: 500px;
  width: 50vw;
  padding: 0px;
  margin: 50px;
  overflow: hidden;
`

export const TopContainer = styled.div`
  width: 100%;
  display: flex;
  padding: 15px;
  justify-content: space-around;
  background: lightgray;
  border-bottom: 1px solid gray;
`

export const TopInfo = styled.span`

`

export const MiddleContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: left;
`

export const ProductContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px;
`

export const ProductInfo = styled.span`
  justify-content: space-around;
`

export const ProductImg = styled.img`
  width: 320px;
  height: 320px;
`

export const BottomContainer = styled.div`
  width: 100%;
  display: flex;
  padding: 15px;
  justify-content: space-around;
  background: lightgray;
  border-top: 1px solid gray
`

export const EmptyContainer = styled.div`
  height: 40px;
  width: 100%;
`