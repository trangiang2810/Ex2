import React from 'react'
import Image from 'next/image'
import styled from 'styled-components'
import { dataFood } from '../data'
import Sl from '../img/Coupon.png'
import { FaMapMarkerAlt } from 'react-icons/fa'
import { BsFillDoorClosedFill, BsClockFill } from 'react-icons/bs'
import { AiFillBell } from 'react-icons/ai'
import Booking from '../img/booking.png'
import { Alert, Space } from 'antd'
// import { Col, Row } from 'antd'
import Sidebar from './Sidebar'
const Container = styled.div`
  margin: 0 10.5rem;
  display: flex;
`

const WrapperProduct = styled.div`
  padding: 2.5rem 0 0 0;
  width: 52.875rem;
`
const ItemProduct = styled.div`
  margin: 0 0 1.5rem 1.5rem;
  border-radius: 10px;
  background: #fff;
  position: relative;
`

const Favourite = styled.span`
  position: absolute;
  top: 0.8125rem;
  left: 1rem;
`
const Sale = styled.div`
  background: #1dac0e;
  position: absolute;
  top: 1rem;
  right: 1rem;
  padding: 0.1875rem 0.5rem;
  border-radius: 50px;
  display: flex;
  gap: 0.3125rem;
  align-items: center;
`

const Content = styled.div`
  padding: 0.75rem 1rem 1.375rem;
`

const Title = styled.h2`
  font-weight: 700;
  font-size: 24px;
  line-height: 32px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`

const Information = styled.div`
  margin-top: 0.75rem;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`
const TextItem = styled.div`
  display: flex;
  gap: 0.78125rem;
  font-size: 0.75rem;
  align-items: center;
`

const Km = styled.span`
  color: #007aff;
`

const Regime = styled.span`
  color: #1dac0e;
`

const WrapperTime = styled.div`
  display: flex;
  gap: 1.625rem;
`
const TimeL = styled.span`
  background: rgba(46, 146, 255, 0.2);
  border-radius: 10px;
  padding: 0.1rem 0.3rem;
`
const TimeR = styled.span`
  background: rgba(29, 172, 14, 0.2);
  border-radius: 10px;
  padding: 0.1rem 0.3rem;
`

const Order = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const Button = styled.button`
  width: 101px;
  height: 32px;
  font-weight: 700;
  font-size: 14px;
  line-height: 16px;
  padding: 0.5rem 1.5rem;
  box-shadow: 0px 2px 4px rgba(40, 41, 61, 0.04),
    0px 8px 16px rgba(96, 97, 112, 0.16);
  border-radius: 10px;
  background: #ff881d;
  color: #fff;
`

// const FromAlert = styled.div`
//   position: fixed;
//   bottom: 30%;
//   right: 0;
// `

// const IconAl = styled.div`
//   background: #fcdab0;
//   color: #ff881d;
//   font-size: 1.3rem;
//   border-radius: 5px 0 0 5px;
//   padding: 0.3rem;
// `

const Row = styled.div`
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  @media (max-width: 768px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
`
// const Col = styled.div``
const Product: React.FC = () => {
  return (
    <>
      <Container>
        <Sidebar />
        {/* right  */}
        <WrapperProduct>
          <Row>
            {dataFood.map(
              ({
                id,
                favourite,
                title,
                image,
                status,
                address,
                distance,
                oTime,
                cTime,
              }) => (
                <>
                  {/* <Col span={8}> */}
                  <ItemProduct>
                    <div>
                      <Image
                        style={{ width: '100%', height: 'auto' }}
                        src={image}
                        alt=""
                      />
                      <Favourite>
                        <Image src={favourite} alt="" />
                      </Favourite>
                      <Sale>
                        <Image src={Sl} alt="" />
                        <span>20%</span>
                      </Sale>
                    </div>
                    <Content>
                      <Title>{title}</Title>
                      <Information>
                        <TextItem>
                          <span>
                            <FaMapMarkerAlt />
                          </span>
                          <span>
                            {address} <Km>({distance}km)</Km>
                          </span>
                        </TextItem>

                        <TextItem>
                          <BsFillDoorClosedFill />
                          <Regime>{status}</Regime>
                        </TextItem>
                        <TextItem>
                          <BsClockFill />
                          <WrapperTime>
                            <TimeL>{oTime}</TimeL>
                            <TimeR>{cTime}</TimeR>
                          </WrapperTime>
                        </TextItem>
                      </Information>
                      <Order>
                        <Button>Delivery</Button>
                        <Image src={Booking} alt="" />
                      </Order>
                    </Content>
                  </ItemProduct>
                  {/* </Col> */}
                </>
              ),
            )}
          </Row>
          {/* <FromAlert>

            <Alert
              message="Đơn hàng cảu bạn đã đặt thành công"
              type="warning"
            />
            <IconAl>
              <AiFillBell />
            </IconAl>
          </FromAlert> */}
        </WrapperProduct>
      </Container>
    </>
  )
}

export default Product
