import React from 'react';
import styled from 'styled-components';
import { BiBox, BiRocket, BiSend, BiCheck, BiX } from 'react-icons/bi';

const PricingSection = styled.section`
  padding: 60px 0 120px 0;
  background-color: #fff;
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;

  &[data-aos="zoom-in"] {
    margin-top: 40px;
  }
`;

const SectionTitle = styled.div`
  text-align: center;
  margin-bottom: 60px;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;

  h2 {
    font-size: 32px;
    font-weight: 700;
    color: #32353a;
    margin-bottom: 20px;
    position: relative;
    display: inline-flex;
    align-items: center;
    gap: 20px;

    &:before,
    &:after {
      content: "";
      height: 2px;
      width: 40px;
      background-color: #e6b908;
      display: block;
    }
  }

  p {
    font-size: 16px;
    color: #6c757d;
    max-width: 800px;
    margin: 0 auto;
    line-height: 1.7;
  }
`;

const Row = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 24px;
  margin-top: 40px;

  @media (max-width: 992px) {
    grid-template-columns: 1fr;
  }
`;

const PricingItem = styled.div`
  background-color: #fff;
  box-shadow: 0 3px 20px -2px rgba(0, 0, 0, 0.1);
  padding: 60px 40px;
  height: 100%;
  position: relative;
  border-radius: 15px;
  ${props => props.featured && `
    z-index: 10;
    border: 3px solid #e6b908;

    @media (min-width: 992px) {
      transform: scale(1.15);
    }
  `}

  h3 {
    font-weight: 600;
    margin-bottom: 15px;
    font-size: 20px;
    text-align: center;
    color: #32353a;
  }

  h4 {
    font-size: 48px;
    color: #e6b908;
    font-weight: 700;
    margin-bottom: 25px;
    text-align: center;

    sup {
      font-size: 28px;
    }

    span {
      color: rgba(108, 117, 125, 0.5);
      font-size: 18px;
      font-weight: 400;
    }
  }

  ul {
    padding: 20px 0;
    list-style: none;
    color: rgba(50, 53, 58, 0.8);
    text-align: left;
    line-height: 20px;

    li {
      padding: 10px 0;
      display: flex;
      align-items: center;

      &.na {
        color: rgba(108, 117, 125, 0.3);
        
        i {
          color: rgba(108, 117, 125, 0.3);
        }

        span {
          text-decoration: line-through;
        }
      }

      i {
        color: #059652;
        font-size: 24px;
        padding-right: 3px;
      }
    }
  }
`;

const Icon = styled.div`
  margin: 30px auto 20px auto;
  width: 70px;
  height: 70px;
  background: #e6b908;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: 0.3s;
  transform-style: preserve-3d;
  position: relative;

  i {
    color: #fff;
    font-size: 28px;
    transition: ease-in-out 0.3s;
    line-height: 0;
  }

  &:before {
    position: absolute;
    content: "";
    height: 86px;
    width: 86px;
    border-radius: 50%;
    background: rgba(230, 185, 8, 0.2);
    transition: all 0.3s ease-out 0s;
    transform: translateZ(-1px);
  }

  &:after {
    position: absolute;
    content: "";
    height: 102px;
    width: 102px;
    border-radius: 50%;
    background: rgba(230, 185, 8, 0.1);
    transition: all 0.3s ease-out 0s;
    transform: translateZ(-2px);
  }
`;

const BuyButton = styled.a`
  color: rgba(50, 53, 58, 0.8);
  display: inline-block;
  padding: 8px 40px 10px 40px;
  border-radius: 50px;
  border: 1px solid rgba(50, 53, 58, 0.2);
  transition: 0.3s;
  font-size: 16px;
  font-weight: 600;
  text-decoration: none;

  &:hover {
    background-color: #e6b908;
    color: #fff;
  }
`;

const ButtonWrapper = styled.div`
  text-align: center;
`;

const Pricing = () => {
  return (
    <PricingSection id="pricing" className="pricing section">
      <Container>
        <SectionTitle className="section-title" data-aos="fade-up">
          <h2>Packages</h2>
          <p>Choose a package which suits your needs. Each comes with a steel plaque QR code, when scanned with a smartphone, links to a personalised digital profile.</p>
        </SectionTitle>

        <Container data-aos="zoom-in" data-aos-delay="100">
          <Row>
            <PricingItem>
              <h3>Starter Plan</h3>
              <Icon>
                <BiBox size={28} color="#fff" />
              </Icon>
              <h4><sup>USD$</sup>15<span> / month</span></h4>
              <ul>
                <li><BiCheck size={24} color="#059652" /> <span>Tailored memorial page</span></li>
                <li><BiCheck size={24} color="#059652" /> <span>Personalised biography</span></li>
                <li><BiCheck size={24} color="#059652" /> <span>Upload photos and videos</span></li>
                <li className="na"><BiX size={24} /> <span>Printed QR code on tombestone</span></li>
                <li className="na"><BiX size={24} /> <span>Delivery of QR code</span></li>
              </ul>
              <ButtonWrapper>
                <BuyButton href="#">Buy Now</BuyButton>
              </ButtonWrapper>
            </PricingItem>

            <PricingItem featured>
              <h3>Yearly Plan</h3>
              <Icon>
                <BiRocket size={28} color="#fff" />
              </Icon>
              <h4><sup>$</sup>109<span> / year</span></h4>
              <ul>
                <li><BiCheck size={24} color="#059652" /> <span>Tailored memorial page</span></li>
                <li><BiCheck size={24} color="#059652" /> <span>Personalised biography</span></li>
                <li><BiCheck size={24} color="#059652" /> <span>Upload photos and videos</span></li>
                <li><BiCheck size={24} color="#059652" /> <span>Printed QR code on tombestone</span></li>
                <li><BiCheck size={24} color="#059652" /> <span>Free delivery of QR code for tombestone</span></li>
              </ul>
              <ButtonWrapper>
                <BuyButton href="#">Buy Now</BuyButton>
              </ButtonWrapper>
            </PricingItem>

            <PricingItem>
              <h3>Once-Off Plan</h3>
              <Icon>
                <BiSend size={28} color="#fff" />
              </Icon>
              <h4><sup>$</sup>149<span> / lifetime</span></h4>
              <ul>
                <li><BiCheck size={24} color="#059652" /> <span>Tailored memorial page</span></li>
                <li><BiCheck size={24} color="#059652" /> <span>Personalised biography</span></li>
                <li><BiCheck size={24} color="#059652" /> <span>Upload photos and videos</span></li>
                <li><BiCheck size={24} color="#059652" /> <span>Printed QR code on tombestone</span></li>
                <li><BiCheck size={24} color="#059652" /> <span>Free delivery of QR code for tombestone</span></li>
              </ul>
              <ButtonWrapper>
                <BuyButton href="#">Buy Now</BuyButton>
              </ButtonWrapper>
            </PricingItem>
          </Row>
        </Container>
      </Container>
    </PricingSection>
  );
};

export default Pricing; 