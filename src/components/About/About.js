import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { BiRightArrowAlt, BiBuildings, BiClipboard, BiCommand, BiTrendingUp } from 'react-icons/bi';

const AboutSection = styled.section`
  background: #ffffff;
  padding: 80px 0;
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
`;

const Row = styled.div`
  display: grid;
  grid-template-columns: 450px 1fr;
  gap: 80px;
  align-items: flex-start;

  @media (max-width: 1200px) {
    grid-template-columns: 1fr;
    gap: 40px;
  }
`;

const Content = styled.div`
  h2:first-child {
    font-size: 38px;
    font-weight: 700;
    color: #32353a;
    line-height: 1.2;
    margin-bottom: 20px;
  }

  h2:nth-child(3) {
    font-size: 38px;
    font-weight: 700;
    margin-bottom: 20px;
    color: #32353a;
    line-height: 1.2;
  }

  p {
    color: #6c757d;
    margin-bottom: 30px;
    line-height: 1.7;
    font-size: 16px;
  }
`;

const ReadMore = styled(Link)`
  background: #e6b908;
  color: #fff;
  font-weight: 500;
  font-size: 15px;
  padding: 12px 30px;
  border-radius: 5px;
  transition: 0.3s;
  display: inline-flex;
  align-items: center;
  text-decoration: none;

  svg {
    font-size: 20px;
    margin-left: 8px;
    transition: 0.3s;
  }

  &:hover {
    background: #d4ab07;
    transform: translateY(-2px);

    svg {
      transform: translateX(5px);
    }
  }
`;

const IconBoxesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 30px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const IconBox = styled.div`
  background-color: #ffffff;
  padding: 32px;
  box-shadow: 0px 5px 25px rgba(0, 0, 0, 0.1);
  border-radius: 12px;
  height: fit-content;

  &:nth-child(2), &:nth-child(4) {
    margin-top: 30px;

    @media (max-width: 768px) {
      margin-top: 0;
    }
  }
`;

const IconWrapper = styled.div`
  width: 48px;
  height: 48px;
  border-radius: 50%;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 24px;
  font-size: 24px;
  background-color: rgba(230, 185, 8, 0.1);
  color: #e6b908;
`;

const IconBoxTitle = styled.h3`
  margin-bottom: 12px;
  font-size: 22px;
  font-weight: 600;
  color: #32353a;
`;

const IconBoxText = styled.p`
  margin: 0;
  color: #6c757d;
  font-size: 15px;
  line-height: 1.7;
`;

const About = () => {
  return (
    <AboutSection id="about" className="section">
      <Container data-aos="fade-up" data-aos-delay="100">
        <Row>
          <Content>
            <h2>About Us</h2>
            <br />
            <h2>Welcome to Starlight Memories where memories are preserved and lives celebrated.</h2>
            <p>
              At Starlight Memories, we believe that every life shines brightly and deserves to be remembered with love, dignity, and beauty. We offer a meaningful way for families in Zimbabwe and around the world to celebrate the lives of their loved ones through digital memorials linked to a custom QR code plaque.
            </p>
            <ReadMore to="/about">
              <span>Read More</span>
              <BiRightArrowAlt />
            </ReadMore>
          </Content>

          <IconBoxesGrid>
            <IconBox data-aos="fade-up" data-aos-delay="200">
              <IconWrapper>
                <BiBuildings />
              </IconWrapper>
              <IconBoxTitle>Purchase a memorial Package</IconBoxTitle>
              <IconBoxText>
                Lifetime Plan: One-time payment for comprehensive features. Starter Plan: Begin here and upgrade to Lifetime when ready. Managed Package: Get assistance in constructing your memorial page. Select the best fit for your needs. Reach out for support if needed.
              </IconBoxText>
            </IconBox>

            <IconBox data-aos="fade-up" data-aos-delay="300">
              <IconWrapper>
                <BiClipboard />
              </IconWrapper>
              <IconBoxTitle>Craft Your Memorial Page</IconBoxTitle>
              <IconBoxText>
                After purchasing and logging in, follow instructions to build your memorial page. Start with the biography, family history, and memories. Add a family tree and upload videos and images.
              </IconBoxText>
            </IconBox>

            <IconBox data-aos="fade-up" data-aos-delay="400">
              <IconWrapper>
                <BiCommand />
              </IconWrapper>
              <IconBoxTitle>QR Code Creation and Delivery</IconBoxTitle>
              <IconBoxText>
                Following the crafting of your memorial page, we engrave a personalised QR code on a handcrafted steel plaque.
              </IconBoxText>
            </IconBox>

            <IconBox data-aos="fade-up" data-aos-delay="500">
              <IconWrapper>
                <BiTrendingUp />
              </IconWrapper>
              <IconBoxTitle>QR Code Fitting Options</IconBoxTitle>
              <IconBoxText>
                Your custom QR code can be affixed to a grave, bench, or urn using weather-durable adhesive backing for secure and long-lasting placement. Should you wish to adorn a tree with the QR code, please notify us, and we'll make suitable arrangements.
              </IconBoxText>
            </IconBox>
          </IconBoxesGrid>
        </Row>
      </Container>
    </AboutSection>
  );
};

export default About; 