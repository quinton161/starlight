import React, { useEffect } from 'react';
import styled from 'styled-components';
import CountUp from 'react-countup';
import AOS from 'aos';
import 'aos/dist/aos.css';

const StatsSection = styled.section`
  position: relative;
  padding: 120px 0;
  overflow: hidden;

  &::before {
    content: "";
    position: absolute;
    inset: 0;
    background: rgba(0, 0, 0, 0.3);
    z-index: 2;
  }
`;

const BackgroundImage = styled.img`
  position: absolute;
  inset: 0;
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
  z-index: 1;
  opacity: 0.8;
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
  position: relative;
  z-index: 3;
`;

const StatsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 30px;

  @media (max-width: 992px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 576px) {
    grid-template-columns: 1fr;
  }
`;

const StatsItem = styled.div`
  padding: 30px;
  width: 100%;
  text-align: center;
  height: 100%;
`;

const StatsNumber = styled.span`
  font-size: 48px;
  display: block;
  color: #ffffff;
  font-weight: 700;
  margin-bottom: 10px;
`;

const StatsText = styled.p`
  padding: 0;
  margin: 0;
  font-size: 16px;
  font-weight: 700;
  color: rgba(255, 255, 255, 0.6);
`;

const Stats = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: 'ease-in-out',
      once: true,
      mirror: false
    });
  }, []);

  const statsData = [
    { number: 232, text: 'Clients' },
    { number: 521, text: 'Projects' },
    { number: 1453, text: 'Hours Of Support' },
    { number: 32, text: 'Workers' }
  ];

  return (
    <StatsSection id="stats">
      <BackgroundImage 
        src="/assets/img/stats-bg.jpg" 
        alt="Statistics Background"
        data-aos="fade-in"
      />
      <Container data-aos="fade-up" data-aos-delay="100">
        <StatsGrid>
          {statsData.map((stat, index) => (
            <StatsItem key={index}>
              <StatsNumber>
                <CountUp 
                  end={stat.number} 
                  duration={1} 
                  enableScrollSpy={true}
                  scrollSpyOnce={true}
                />
              </StatsNumber>
              <StatsText>{stat.text}</StatsText>
            </StatsItem>
          ))}
        </StatsGrid>
      </Container>
    </StatsSection>
  );
};

export default Stats; 