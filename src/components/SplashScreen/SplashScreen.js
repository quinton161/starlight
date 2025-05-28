import React from 'react';
import styled, { keyframes } from 'styled-components';

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

const fadeOut = keyframes`
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
    visibility: hidden;
  }
`;

const SplashContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #fff;
  z-index: 9999;
  animation: ${props => props.isLoading ? 'none' : fadeOut} 0.3s ease-out forwards;
  will-change: opacity, visibility;
  transform: translateZ(0);
  backface-visibility: hidden;
`;

const LogoContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  transform: translateZ(0);
`;

const Logo = styled.img`
  width: 100px;
  height: auto;
  margin-bottom: 15px;
  will-change: transform;
`;

const Spinner = styled.div`
  width: 30px;
  height: 30px;
  border: 2px solid #f3f3f3;
  border-top: 2px solid #e6b908;
  border-radius: 50%;
  animation: ${rotate} 0.8s linear infinite;
  will-change: transform;
  transform: translateZ(0);
`;

const SplashScreen = ({ isLoading }) => {
  return (
    <SplashContainer isLoading={isLoading}>
      <LogoContainer>
        <Logo 
          src="/assets/img/logo.png" 
          alt="Starlight Memories"
          loading="eager"
          decoding="async"
        />
        <Spinner />
      </LogoContainer>
    </SplashContainer>
  );
};

export default React.memo(SplashScreen); 