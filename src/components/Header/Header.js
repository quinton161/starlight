import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { BiChevronDown, BiMenu, BiX } from 'react-icons/bi';

const HeaderContainer = styled.header`
  color: var(--default-color);
  padding: ${props => props.isScrolled ? '12px 0' : '15px 0'};
  transition: all 0.3s ease-in-out;
  z-index: 997;
  position: fixed;
  width: 100%;
  top: 0;
  background-color: ${props => props.isScrolled ? '#ffffff' : 'transparent'};
  box-shadow: ${props => props.isScrolled ? '0 2px 20px rgba(0, 0, 0, 0.1)' : 'none'};

  @media (max-width: 480px) {
    padding: ${props => props.isScrolled ? '10px 0' : '12px 0'};
  }
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
    display: flex;
    justify-content: space-between;
  align-items: center;
  position: relative;

  @media (max-width: 480px) {
    padding: 0 15px;
  }
`;

const Logo = styled(Link)`
  display: flex;
  align-items: center;
  text-decoration: none;
  z-index: 998;

  img {
    height: 40px;
    margin-right: 10px;

    @media (max-width: 480px) {
      height: 32px;
    margin-right: 8px;
    }
  }

  h1 {
    font-size: 24px;
    margin: 0;
    font-weight: 600;
    color: ${props => props.isScrolled ? '#333' : '#fff'};
    transition: color 0.3s ease;

    @media (max-width: 480px) {
      font-size: 20px;
    }
  }
`;

const NavMenu = styled.nav`
  @media (min-width: 992px) {
  display: flex;
    align-items: center;

    ul {
      display: flex;
      list-style: none;
      margin: 0;
      padding: 0;
      gap: 30px;
    }

    li {
      position: relative;
    }

    a {
      color: ${props => props.isScrolled ? '#333' : 'rgba(255, 255, 255, 0.8)'};
      text-decoration: none;
      font-size: 16px;
      font-weight: 500;
      padding: 10px 0;
      transition: 0.3s ease;
      display: flex;
      align-items: center;
      gap: 4px;

      &:hover, &.active {
        color: var(--accent-color);
      }
    }

    .dropdown {
      position: relative;

      ul {
        position: absolute;
        top: 100%;
        left: -25px;
        background: #fff;
      padding: 10px 0;
        min-width: 200px;
        box-shadow: 0 2px 15px rgba(0, 0, 0, 0.1);
        border-radius: 4px;
        display: none;
        flex-direction: column;
        gap: 0;
        opacity: 0;
        visibility: hidden;
        transition: 0.3s ease;

        li {
          width: 100%;
        }

        a {
          padding: 10px 25px;
          color: #333;
          white-space: nowrap;
        
        &:hover {
            color: var(--accent-color);
            background: rgba(230, 185, 8, 0.05);
          }
      }
    }

      &:hover ul {
        display: flex;
      opacity: 1;
      visibility: visible;
        top: calc(100% + 5px);
      }
    }
  }

  @media (max-width: 991px) {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.7);
    display: ${props => props.isOpen ? 'block' : 'none'};
    opacity: ${props => props.isOpen ? '1' : '0'};
    visibility: ${props => props.isOpen ? 'visible' : 'hidden'};
    transition: 0.3s ease;
    z-index: 997;

    ul {
      position: absolute;
      top: 70px;
      right: 15px;
      left: 15px;
      background: #fff;
      padding: 15px;
      border-radius: 8px;
      box-shadow: 0 2px 15px rgba(0, 0, 0, 0.1);
      max-height: calc(100vh - 100px);
      overflow-y: auto;
      list-style: none;
      margin: 0;

      &::-webkit-scrollbar {
        width: 5px;
      }

      &::-webkit-scrollbar-track {
        background: #f1f1f1;
        border-radius: 10px;
      }

      &::-webkit-scrollbar-thumb {
        background: #888;
        border-radius: 10px;
      }
    }

    li {
      margin-bottom: 10px;

      &:last-child {
        margin-bottom: 0;
      }
    }

    a {
      color: #333;
      text-decoration: none;
      font-size: 15px;
      font-weight: 500;
      display: block;
      padding: 8px 10px;
      border-radius: 4px;
      transition: all 0.3s ease;

      &:hover, &.active {
        color: var(--accent-color);
        background: rgba(230, 185, 8, 0.05);
      }
    }

    .dropdown {
      ul {
      position: static;
      box-shadow: none;
        padding: 5px 0 5px 15px;
        margin-top: 5px;
        background: transparent;
        max-height: none;
        opacity: 1;
        visibility: visible;
      }

      li {
        margin-bottom: 5px;
        
        &:last-child {
          margin-bottom: 0;
        }
      }

      a {
        padding: 6px 10px;
        font-size: 14px;
      }
    }
  }

  @media (max-width: 480px) {
    ul {
      top: 60px;
      padding: 12px;
    }

    a {
      font-size: 14px;
      padding: 6px 8px;
    }
  }
`;

const GetStartedButton = styled(Link)`
  background: var(--accent-color);
  color: #fff;
  padding: 10px 25px;
  border-radius: 6px;
  font-weight: 500;
  font-size: 16px;
  text-decoration: none;
  transition: all 0.3s ease;
  z-index: 998;

  &:hover {
    background: #d4ac07;
    transform: translateY(-2px);
  }

  @media (max-width: 991px) {
    display: none;
  }
`;

const MobileNavToggle = styled.button`
  display: none;
  background: none;
  border: none;
  font-size: 24px;
  cursor: pointer;
  z-index: 998;
  color: ${props => props.isScrolled ? '#333' : '#fff'};
  transition: color 0.3s ease;
  padding: 8px;
  margin: -8px;

  @media (max-width: 991px) {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  @media (max-width: 480px) {
    font-size: 22px;
  }
`;

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isMenuOpen]);

  const handleLinkClick = () => {
    setIsMenuOpen(false);
  };

  return (
    <HeaderContainer isScrolled={isScrolled}>
      <Container>
        <Logo to="/" isScrolled={isScrolled} onClick={handleLinkClick}>
          <img src="/assets/img/logo.png" alt="Starlight Memories" />
          <h1>Starlight Memories</h1>
        </Logo>

        <NavMenu isOpen={isMenuOpen} isScrolled={isScrolled}>
          <ul>
            <li><Link to="/" onClick={handleLinkClick} className="active">Home</Link></li>
            <li><Link to="/about" onClick={handleLinkClick}>About</Link></li>
            <li><Link to="/packages" onClick={handleLinkClick}>Packages</Link></li>
            <li><Link to="/contact" onClick={handleLinkClick}>Contact</Link></li>
            <li className="dropdown">
              <Link to="#" onClick={(e) => e.preventDefault()}>
                Account <BiChevronDown />
              </Link>
              <ul>
                <li><Link to="/signup" onClick={handleLinkClick}>Sign Up</Link></li>
                <li><Link to="/login" onClick={handleLinkClick}>Log In</Link></li>
                <li><Link to="/forgot-password" onClick={handleLinkClick}>Forgot Password</Link></li>
              </ul>
            </li>
          </ul>
        </NavMenu>

        <GetStartedButton to="/get-started" onClick={handleLinkClick}>
          Get Started
        </GetStartedButton>
        
        <MobileNavToggle 
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          isScrolled={isScrolled}
          aria-label="Toggle navigation"
        >
          {isMenuOpen ? <BiX /> : <BiMenu />}
        </MobileNavToggle>
      </Container>
    </HeaderContainer>
  );
};

export default Header; 