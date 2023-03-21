import React from 'react'
import Logo from '../img/logo.png'
import CR from '../img/copyright.png'
import Image from 'next/image'
import { Col, Row } from 'antd'
import { BsApple, BsInstagram } from 'react-icons/bs'
import { GrAndroid, GrFacebookOption, GrGooglePlus } from 'react-icons/gr'
import Apple from '../img/icons/Apple.png'
import Anderoid from '../img/icons/Anderoid.png'
import styled from 'styled-components'

const Footers = styled.footer`
  /* margin: 0 10.5rem; */
  background: #fff;
`

const App = styled.div`
  width: 5.5rem;
  height: 5.5rem;
  box-shadow: 0px 0px 1px rgba(40, 41, 61, 0.04),
    0px 2px 4px rgba(96, 97, 112, 0.16);
  border-radius: 10px;
  text-align: center;
  margin-bottom: 1.5rem;
  padding-top: 0.6rem;
  gap: 0.375rem;
  display: flex;
  flex-direction: column;
`
const AppIcon = styled.div`
  /* font-size: 2.5rem; */
  /* padding-top: 7px; */
`
const Title = styled.h3`
  padding: 2.4375rem 0 1.23rem;
  font-size: 0.875rem;
`

const Link = styled.a`
  font-size: 0.875rem;
  color: #2e92ff;
`
const LinkPhone = styled(Link)`
  color: #f24405;
`
const Li = styled.li`
  font-size: 0.875rem;
  line-height: 1.375rem;
`
const Address = styled.div`
  text-align: right;
`

const Copyright = styled.p`
  font-size: 10px;
  color: #828282;
  letter-spacing: -0.01em;
`

const IconLink = styled.a`
  width: 1.5rem;
  height: 1.5rem;
  background: #828282;
  padding: 0.35rem;
  border-radius: 100%;
  color: #fff;
`
const WrapperIconLick = styled.div`
  display: flex;
  gap: 1.5rem;
`

const FromCopyright = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.75rem;
  /* text-align: center; */
  /* margin: auto; */
`

const WrapperCopyright = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.8125rem;
`

const Footer: React.FC = () => {
  return (
    <Footers>
      <Row style={{ borderTop: '1px solid #E0E1E0', margin: '0 10.5rem' }}>
        <Col span={5}>
          <Title>Công ty</Title>
          <ul>
            <Li>
              <Link href="#"> Giới thiệu & liên hệ</Link>
            </Li>
            <Li>
              <Link href="#">Trung tâm trợ giúp</Link>
            </Li>
            <Li>
              <Link href="#">Quy chế</Link>
            </Li>
            <Li>
              <Link href="#">Điều khoản sử dụng</Link>
            </Li>
            <Li>
              <Link href="#">Bảo mật thông tin</Link>
            </Li>
            <Li>
              <Link href="#">Giải quyết khiếu nại</Link>
            </Li>
            <Li>
              <Link href="#">Hợp tác nhân viên giao hàng</Link>
            </Li>
            <Li>
              <Link href="#">Đăng ký quán</Link>
            </Li>
            <Li>
              <Link href="#">Ứng dụng</Link>
            </Li>
          </ul>
        </Col>
        <Col span={5}>
          <Title>App Capichi</Title>
          <App>
            <AppIcon>
              <Image src={Apple} alt="apple" />
            </AppIcon>
            <p>iOS</p>
          </App>
          <App>
            <AppIcon>
              <Image src={Anderoid} alt="Anderoid" />
            </AppIcon>
            <p>Anderoid</p>
          </App>
        </Col>
        <Col span={7}>
          <FromCopyright>
            <WrapperCopyright>
              <Image width={212} height={62} src={Logo} alt="logo" />
              <Copyright>
                @ Capichi 2021 - A Food Delivery Corporation
              </Copyright>
            </WrapperCopyright>
            <WrapperIconLick>
              <IconLink href="#">
                <BsInstagram />
              </IconLink>
              <IconLink href="#">
                <GrFacebookOption />
              </IconLink>
              <IconLink href="#">
                <GrGooglePlus />
              </IconLink>
            </WrapperIconLick>
          </FromCopyright>
        </Col>
        <Col span={7}>
          <Address>
            <Title>Địa chỉ công ty</Title>
            <ul>
              <Li>Công ty cổ phần Capichi</Li>
              <Li>
                Tầng 4, tòa nhà VietinBank, số 1 Lê Thái Tông, phường cầu giấy,
                quận Cầu Giầy, Hà Nội
              </Li>
              <Li>
                Giấy CN ĐKDN số: 02264651313, do cơ sở Kế hoạch và Đầu tư TP.Hà
                Nội cấp ngày 11/12/2020, sửa đổi lần thứ 21, ngày 01/02/2021
              </Li>
              <Li>
                Số điện thoại:{' '}
                <LinkPhone className="text-[0.8rem]" href="tel:1900 1522">
                  1900 1522
                </LinkPhone>
              </Li>
              <Li>
                <Link className="text-[0.8rem]" href="capichi@gmail.com">
                  capichi@gmail.com
                </Link>
              </Li>
              <Image src={CR} alt="logo" />
            </ul>
          </Address>
        </Col>
      </Row>
    </Footers>
  )
}

export default Footer
