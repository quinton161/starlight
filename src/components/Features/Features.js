import React from 'react';
import styled from 'styled-components';

const FeaturesSection = styled.section`
  padding: 60px 0;
  background-color: #fff;
  overflow: hidden;
  width: 100%;
`;

const Container = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
  box-sizing: border-box;

  @media (max-width: 480px) {
    padding: 0 15px;
  }
`;

const SectionTitle = styled.div`
  text-align: center;
  margin-bottom: 40px;
  position: relative;
  width: 100%;

  h2 {
    font-size: clamp(24px, 5vw, 32px);
    font-weight: 700;
    color: #32353a;
    margin-bottom: 20px;
    position: relative;
    display: inline-flex;
    align-items: center;
    gap: clamp(10px, 2vw, 20px);

    &:before,
    &:after {
      content: "";
      height: 2px;
      width: clamp(30px, 4vw, 40px);
      background-color: #e6b908;
      display: block;
    }
  }

  p {
    font-size: clamp(15px, 4vw, 16px);
    color: #6c757d;
    max-width: 800px;
    margin: 0 auto;
    line-height: 1.6;
    padding: 0 15px;
  }
`;

const Row = styled.div`
  display: flex;
  align-items: center;
  gap: clamp(30px, 4vw, 60px);
  margin-bottom: clamp(40px, 6vw, 100px);
  width: 100%;

  &:last-child {
    margin-bottom: 0;
  }

  @media (max-width: 992px) {
    flex-direction: column;
  }
`;

const Column = styled.div`
  width: 100%;
  max-width: ${props => props.size === 5 ? '41.666667%' : '58.333333%'};

  @media (max-width: 992px) {
    max-width: 100%;
  }

  h3 {
    font-weight: 700;
    font-size: clamp(22px, 4vw, 26px);
    color: #32353a;
    margin-bottom: clamp(15px, 3vw, 20px);
  }

  p {
    color: #6c757d;
    margin-bottom: clamp(20px, 4vw, 30px);
    line-height: 1.6;
    font-size: clamp(15px, 4vw, 16px);
  }

  ul {
    list-style: none;
    padding: 0;
    margin-bottom: clamp(20px, 4vw, 30px);

    li {
      display: flex;
      align-items: flex-start;
      padding-bottom: clamp(8px, 2vw, 10px);
      color: #6c757d;
      font-size: clamp(15px, 4vw, 16px);

      &:last-child {
        padding-bottom: 0;
      }

      &:before {
        content: "✓";
        color: #e6b908;
        margin-right: 10px;
        font-size: clamp(18px, 4vw, 20px);
        line-height: 1;
      }
    }
  }
`;

const GetStartedButton = styled.a`
  display: inline-block;
  background-color: #e6b908;
  color: #fff;
  padding: clamp(8px, 2vw, 10px) clamp(25px, 4vw, 30px);
  border-radius: 4px;
  text-decoration: none;
  font-weight: 500;
  font-size: clamp(15px, 4vw, 16px);
  transition: 0.3s;
  white-space: nowrap;

  &:hover {
    background-color: rgba(230, 185, 8, 0.9);
  }
`;

const ImageContainer = styled.div`
  position: relative;
  width: 100%;
  aspect-ratio: 4/3;
  overflow: hidden;
`;

const ImageStack = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  min-height: 500px;

  @media (max-width: 992px) {
    min-height: 400px;
  }

  @media (max-width: 640px) {
    min-height: 300px;
  }

  .stack-back {
    position: absolute;
    right: 0;
    top: 0;
    width: 75%;
    height: 100%;
    z-index: 1;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      border: clamp(4px, 1vw, 6px) solid #fff;
      box-shadow: 0 15px 30px -10px rgba(0, 0, 0, 0.1);
    }
  }

  .stack-front {
    position: absolute;
    left: 0;
    top: 20%;
    width: 65%;
    height: 100%;
    z-index: 2;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      border: clamp(4px, 1vw, 6px) solid #fff;
      box-shadow: 0 15px 30px -10px rgba(0, 0, 0, 0.15);
    }

    @media (max-width: 768px) {
      top: 15%;
      width: 70%;
    }
  }
`;

const SingleImage = styled.div`
  position: relative;
  width: 100%;
  height: 100%;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border: clamp(4px, 1vw, 6px) solid #fff;
    box-shadow: 0 15px 30px -10px rgba(0, 0, 0, 0.1);
  }
`;

const Features = () => {
  return (
    <FeaturesSection id="features" className="features section">
      <Container>
        <SectionTitle className="section-title" data-aos="fade-up">
          <h2>Our Services</h2>
          <p>Whether it's a tribute to a family member, friend, or cherished pet, Starlight Memories allows you to tell their story — your way</p>
        </SectionTitle>

        <Row className="features-item">
          <Column size={5} data-aos="fade-up" data-aos-delay="200">
            <h3>Create a Digital Memorial Page</h3>
            <p>
              Each Starlight memorial includes a secure, personalized web page where you can: • Share your loved one's life story and biography • Upload photos and videos • Display family trees and timelines • Share quotes, prayers, or cherished memories • Allow family and friends to leave tributes or light a virtual candle
            </p>
            <GetStartedButton href="#" className="btn btn-get-started">Get Started</GetStartedButton>
          </Column>
          <Column size={7} data-aos="zoom-out" data-aos-delay="100">
            <ImageContainer className="features-img-bg">
              <ImageStack className="image-stack">
                <div className="stack-back">
                  <img src="/assets/img/features-light-2.jpg" alt="" />
                </div>
                <div className="stack-front">
                  <img src="/assets/img/features-light-1.jpg" alt="" />
                </div>
              </ImageStack>
            </ImageContainer>
          </Column>
        </Row>

        <Row className="features-item">
          <Column size={7} data-aos="zoom-out">
            <ImageContainer className="features-img-bg">
              <SingleImage>
                <img src="/assets/img/features-light-3.jpg" alt="" />
              </SingleImage>
            </ImageContainer>
          </Column>
          <Column size={5} data-aos="fade-up">
            <h3>Order Your QR Code Memorial Today</h3>
            <p>Begin the journey of preserving memories with A Different Ending. Our secure and efficient ordering process ensures that your QR code memorial will be delivered with care. Honour the past, celebrate the present, and create a lasting legacy.</p>
            <ul>
              <li>Tailored memorial page</li>
              <li>Upload photos and videos</li>
              <li>Grave plot details and QR on grave</li>
            </ul>
            <GetStartedButton href="#" className="btn btn-get-started">Get Started</GetStartedButton>
          </Column>
        </Row>
      </Container>
    </FeaturesSection>
  );
};

export default Features;