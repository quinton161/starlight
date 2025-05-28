import React from 'react';
import styled from 'styled-components';
import 'aos/dist/aos.css';

const HeroSection = styled.section`
  width: 100%;
  min-height: 100vh;
  position: relative;
  padding: 80px 0;
  display: flex;
  align-items: center;
  justify-content: center;

  img {
    position: absolute;
    inset: 0;
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
    z-index: 1;
  }

  &:before {
    content: "";
    background: rgba(0, 0, 0, 0.6);
    position: absolute;
    inset: 0;
    z-index: 2;
  }

  .container {
    position: relative;
    z-index: 3;
    width: 100%;
    max-width: 1400px;
    margin: 0 auto;
    padding: 0 8px;
  }

  h2 {
    margin: 0;
    font-size: 44px;
    font-weight: 700;
    color: #ffffff;
    font-family: var(--heading-font);
  }

  p {
    color: rgba(255, 255, 255, 0.8);
    margin: 5px 0 0 0;
    font-size: 20px;
    font-family: var(--body-font);
  }

  @media (max-width: 768px) {
    h2 {
      font-size: 32px;
    }

    p {
      font-size: 18px;
    }

    .container {
      padding: 0 5px;
    }
  }
`;

const Hero = () => {
  return (
    <HeroSection id="hero" className="hero section dark-background">
      <img src="/assets/img/hero-bg.png" alt="" data-aos="fade-in" />
      <div className="container">
        <div className="row">
          <div className="col-lg-10">
            <h2 data-aos="fade-up" data-aos-delay="100">
              Welcome to Starlight Memories
            </h2>
            <p data-aos="fade-up" data-aos-delay="200">
              Honouring Lives and Preserving Legacies for your loved ones
            </p>
          </div>
        </div>
      </div>
    </HeroSection>
  );
};

export default Hero; 