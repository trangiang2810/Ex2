import React from 'react'
import Image from 'next/image'
import styled from 'styled-components'
import { dataCategory } from '../data'
import img from '../img/icons/icon1.png'

const Container = styled.div`
  width: 16.125rem;
  background: #fff;
  height: 100vh;
  box-shadow: 0px 0px 2px rgba(40, 41, 61, 0.04),
    0px 4px 8px rgba(96, 97, 112, 0.16);
  overflow-y: scroll;
  &::-webkit-scrollbar {
    width: 4px;
  }
  &::-webkit-scrollbar-thumb {
    background-color: #aaa;
    border-radius: 100rem;
  }
`

const WrapperItemSidebar = styled.div`
  gap: 1rem;
  display: flex;
  flex-direction: column;
  padding: 2.5rem 1.5rem;
`

const ItemAll = styled.div`
  background: #ff881d;
  align-items: center;
  display: flex;
  border-radius: 0.625rem;
  padding: 0.75rem;
  color: #fff;
  cursor: pointer;
  gap: 1rem;
  :hover {
    background: #fa831c;
  }
`

const Item = styled.div`
  align-items: center;
  display: flex;
  gap: 1rem;
  padding: 0.75rem;
  cursor: pointer;
  border-radius: 6px;

  :hover {
    background: #f6f1f1;
  }
`

const Sidebar: React.FC = () => {
  return (
    <>
      <Container>
        <WrapperItemSidebar>
          <ItemAll>
            {/* <Item> */}
            <Image src={img} alt="icon" />
            <span>All</span>
            {/* </Item> */}
          </ItemAll>
          {dataCategory.map(({ id, content, image }) => (
            <Item key={id}>
              <Image src={image} alt="icon" />
              <span>{content}</span>
            </Item>
          ))}
        </WrapperItemSidebar>
      </Container>
    </>
  )
}

export default Sidebar
