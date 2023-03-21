import React from 'react';
import { Carousel } from 'antd';
import styled from 'styled-components';
import Image from 'next/image';
import main1 from '../img/Banner.png';
import main2 from '../img/Layer 1 1.png';
const Container = styled.div`
  margin: 1rem 0 1.5rem;
  box-shadow: 0px 0px 1px rgba(40, 41, 61, 0.04),
    0px 2px 4px rgba(96, 97, 112, 0.16);
`;

// const Wrapper = styled.div`
//   display: flex;

//   background: red;

//   border-radius: 0.9375rem;
// `;

// const Title = styled.h1`
//   font-weight: 800;
//   font-size: 2.5rem;
//   line-height: 2.8125rem;
//   letter-spacing: 0.02em;
//   margin-left: 5.25rem;

//   color: #1dac0e;
// `;
// const TitleLast = styled.span`
//   color: #ff881d;
// `;

// const WrapperBg = styled.a`
//   position: relative;
// `;

// const P = styled.p`
//   color: #3b3b3b;
// `;

// const Button = styled.button`
//   background: #ff881d;
//   border-radius: 10px;
//   padding: 8px 24px;
//   color: #fff;
//   line-height: 24px;
//   font-size: 1rem;
// `;

const Banner: React.FC = () => (
  <Container>
    <Carousel autoplay>
      {/* <Wrapper>
        <div>
          <Title>
            Get your delivery done. <TitleLast> Anytime, Anywhere</TitleLast>
          </Title>
          <P>
            Apparently we had reached a great height in the atmosphere, for the
            sky was a dead black, and the starts had ceased to twinkle
          </P>
          <Button>VISIT NOW</Button>
        </div>
        <WrapperBg>
          <Image src={main1} alt="hi" />
        </WrapperBg>
      </Wrapper>  */}
      <div>
        <h3>
          <Image src={main1} alt="hi" />
        </h3>
      </div>
      <div>
        <h3>
          <Image src={main1} alt="hi" />
        </h3>
      </div>
      <div>
        <h3>
          <Image src={main1} alt="hi" />
        </h3>
      </div>
    </Carousel>
  </Container>
);

export default Banner;
