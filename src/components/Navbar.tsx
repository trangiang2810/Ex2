import styled from 'styled-components'
import Logo from '../img/logo.png'
import Arrow from '../img/Polygon 3.png'
import FlagEN from '../img/flag.png'
import FlagVN from '../img/flag.png'
import SearchIcon from '../img/icons/search.png'
import Image from 'next/image'
import { Button, Select } from 'antd'
import Link from 'next/link'
const { Option } = Select
const Header = styled.header`
  background: #fff;
  height: 5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 4rem;
  box-shadow: 0px 0px 1px rgba(40, 41, 61, 0.08),
    0px 0.5px 2px rgba(96, 97, 112, 0.16);
  @media (max-width: 768px) {
    /* background: red; */
  }
`

// const Location = styled.button`
//   font-weight: 400;
//   font-size: 0.875rem;
//   gap: 0.5rem;
//   display: flex;
//   align-items: center;
//   padding: 0.375rem 0.5rem;
//   border-radius: 10px;
//   border: 1px solid #fcdab0;
//   background: #fff;
// `

const Search = styled.div`
  border: 1px solid #e0e1e0;
  background: #fbfbfb;
  width: 36.75rem;
  height: 2.5rem;
  border-radius: 10px;
  display: flex;
  gap: 0.9375rem;
  margin: auto;
  align-items: center;
  justify-content: center;
`
const Input = styled.input`
  width: 32rem;
  height: 1.5rem;
  border: none;
  outline: none;
  color: #828282;
`

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 2rem;
`
const BtnOrder = styled.button`
  font-weight: 700;
  font-size: 1rem;
  border-radius: 10px;
  color: #fff;
  background: #ff881d;
  width: 5.25rem;
  height: 2rem;
`
const Language = styled.button`
  border: 1px solid #fcdab0;
  display: flex;
  border-radius: 10px;
  align-items: center;
  gap: 0.5rem;
  width: 5.3125rem;
  height: 2.125rem;
  background: #fff;
  justify-content: center;
`
const Login = styled.a`
  font-weight: 700;
  color: #007aff;
  font-size: 12px;
  border-bottom: 0.1rem solid #007aff;
  padding: 0 0 0.2rem 0;
`
const FromSearch = styled(Search)`
  border: 1px solid #fcdab0;
`
const InputS = styled(Input)`
  background: #fbfbfb;
`
const handleChange = (value: string) => {
  console.log(`selected ${value}`)
}
export default function Navbar() {
  return (
    <Header>
      <Link href="/">
        <Image src={Logo} alt="" />
      </Link>
      <Wrapper>
        <Select
          defaultValue="HaNoi"
          onChange={handleChange}
          options={[
            { value: 'HaNoi', label: 'Ha Noi' },
            { value: 'HCM', label: 'HCM' },
            { value: 'PhuTho', label: 'Phu Tho' },
          ]}
        />
        {/* <Location>
          Ha Noi
          <Image src={Arrow} alt="" />
        </Location> */}
        <FromSearch>
          <Image src={SearchIcon} alt="" />
          <InputS type="text" placeholder="Nhập từ khóa" />
        </FromSearch>
      </Wrapper>
      <Wrapper>
        {/* <Button type="primary" danger>
          Order
        </Button> */}
        <BtnOrder>Order</BtnOrder>

        {/* <Select
          defaultValue="EN"
          onChange={handleChange}
          options={[
            { value: 'EN', label: 'EN' },
            { value: 'VN', label: 'VN' },
          ]}
        />
         */}

        {/* <Select
          defaultValue={
            <Option>
              <Image src={FlagEN} alt="EEN" width={28} height={20} />
              <label>EN</label>
            </Option>
          }
          placeholder="Chọn ngôn ngữ"
          optionFilterProp="children"
        >
          <Option>
            <Image src={FlagEN} alt="EN" width={28} height={20} />
            <label>EN</label>
          </Option>

          <Option>
            <Image src={FlagVN} alt="VN" width={28} height={20} />
            <label>VN</label>
          </Option>
        </Select> */}
        <Language>
          <Image src={FlagEN} alt="" />
          <p>EN</p>
          <Image src={Arrow} alt="" />
        </Language>
        <Login href="/">Đăng nhập</Login>
      </Wrapper>
    </Header>
  )
}
