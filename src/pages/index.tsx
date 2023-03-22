import React from 'react'
import Navbar from '@/components/Navbar'
import Banner from '@/components/Banner'
import Footer from '@/components/Footer'
import Product from '@/components/Product'
import styled from 'styled-components'

const Container = styled.div`
  margin: 0 auto;
  max-width: 1440px;
  width: 1440px;
  box-shadow: 0px 0px 1px rgba(40, 41, 61, 0.04),
    0px 2px 4px rgba(96, 97, 112, 0.16);
`

export default function Home() {
  return (
    <Container>
      <Navbar />
      <Banner />
      <Product />
      <Footer />
    </Container>
  )
}
