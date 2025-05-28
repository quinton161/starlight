import React from 'react';
import styled from 'styled-components';

const FooterWrapper = styled.footer`
  background: #fff;
  color: #666;
  font-size: 14px;
  padding-bottom: 50px;
  position: relative;
`;

const FooterTop = styled.div`
  padding-top: 50px;
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 15px;
`;

const Row = styled.div`
  display: grid;
  grid-template-columns: 5fr 2fr 2fr 3fr;
  gap: 24px;
  
  @media (max-width: 992px) {
    grid-template-columns: repeat(2, 1fr);
  }
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const FooterAbout = styled.div`
  .logo {
    margin-bottom: 25px;
    text-decoration: none;
    display: flex;
    align-items: center;
    
    span {
      color: #333;
      font-size: 30px;
      font-weight: 700;
      letter-spacing: 1px;
      font-family: var(--heading-font);
    }
  }

  p {
    color: #666;
    font-size: 14px;
    font-family: var(--heading-font);
  }
`;

const SocialLinks = styled.div`
  display: flex;
  margin-top: 24px;

  a {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    border: 1px solid rgba(0, 0, 0, 0.1);
    font-size: 16px;
    color: #666;
    margin-right: 10px;
    transition: 0.3s;

    &:hover {
      color: var(--accent-color);
      border-color: var(--accent-color);
    }
  }
`;

const FooterLinks = styled.div`
  margin-bottom: 30px;

  h4 {
    font-size: 16px;
    font-weight: bold;
    position: relative;
    padding-bottom: 12px;
    color: #333;
  }

  ul {
    list-style: none;
    padding: 0;
    margin: 0;

    li {
      padding: 10px 0;
      display: flex;
      align-items: center;

      &:first-child {
        padding-top: 0;
      }
    }

    a {
      color: #666;
      display: inline-block;
      line-height: 1;
      text-decoration: none;

      &:hover {
        color: var(--accent-color);
      }
    }
  }
`;

const FooterContact = styled.div`
  h4 {
    font-size: 16px;
    font-weight: bold;
    position: relative;
    padding-bottom: 12px;
    color: #333;
  }

  p {
    margin-bottom: 5px;
    color: #666;
  }

  strong {
    margin-right: 6px;
    color: #333;
  }

  span {
    color: #666;
  }
`;

const Copyright = styled.div`
  padding-top: 25px;
  padding-bottom: 25px;
  background-color: #f8f9fa;
  text-align: center;
  margin-top: 24px;

  p {
    margin-bottom: 0;
    color: #666;
  }

  .sitename {
    font-weight: bold;
    color: #333;
  }

  span {
    color: #666;
  }
`;

const Footer = () => {
  return (
    <FooterWrapper id="footer">
      <Container>
        <FooterTop>
          <Row>
            <FooterAbout>
              <a href="/" className="logo">
                <span>Starlight Memories</span>
              </a>
              <p>We understand the importance of tradition, family, and storytelling in Zimbabwean culture. Starlight Memories blends digital innovation with heartfelt heritage to preserve legacies for future generations.</p>
              <SocialLinks>
                <a href="https://www.facebook.com/profile.php?id=61573379579579"><i className="bi bi-twitter-x"></i></a>
                <a href="https://www.facebook.com/profile.php?id=61573379579579"><i className="bi bi-facebook"></i></a>
                <a href="https://www.facebook.com/profile.php?id=61573379579579"><i className="bi bi-instagram"></i></a>
                <a href="https://www.facebook.com/profile.php?id=61573379579579"><i className="bi bi-linkedin"></i></a>
              </SocialLinks>
            </FooterAbout>

            <FooterLinks>
              <h4>Useful Links</h4>
              <ul>
                <li><a href="/">Home</a></li>
                <li><a href="/about">About us</a></li>
                <li><a href="/services">Services</a></li>
                <li><a href="/terms">Terms of service</a></li>
                <li><a href="/privacy">Privacy policy</a></li>
              </ul>
            </FooterLinks>

            <FooterLinks>
              <h4>Our Services</h4>
              <ul>
                <li><a href="/services/qr-codes">QR Codes</a></li>
                <li><a href="/services/tombstone-qr">Tombstone QR Codes</a></li>
                <li><a href="/services/memorial">Memorial Websites</a></li>
                <li><a href="/services/lost">Lost Memorials</a></li>
                <li><a href="/services/forever">A forever memory</a></li>
              </ul>
            </FooterLinks>

            <FooterContact>
              <h4>Contact Us</h4>
              <p>WhatsApp</p>
              <p>0776 787 671</p>
              <p>Starlight Memories</p>
              <p className="mt-4"><strong>Phone:</strong> <span>+263 776 787 671</span></p>
              <p><strong>Email:</strong> <span>info@starlightmemories.co.zw</span></p>
            </FooterContact>
          </Row>
        </FooterTop>
      </Container>

      <Container>
        <Copyright>
          <p>© <span>Copyright</span> <strong className="sitename">Starlight Memories</strong> <span>All Rights Reserved</span></p>
        </Copyright>
      </Container>
    </FooterWrapper>
  );
};

export default Footer; 