import React, { useState } from 'react';
import styled from 'styled-components';

const Section = styled.section`
  padding: 60px 0;
  background: #fff;
`;

const Container = styled.div`
  max-width: 1200px;
  margin: auto;
  padding: 0 15px;
`;

const SectionTitle = styled.div`
  text-align: center;
  margin-bottom: 50px;

  h2 {
    font-size: 32px;
    font-weight: 700;
    margin-bottom: 20px;
  }

  p {
    color: #6c757d;
  }
`;

const Row = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 24px;
`;

const InfoColumn = styled.div`
  flex: 1;
  min-width: 300px;
`;

const InfoGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 24px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const InfoItem = styled.div`
  background: #f8f9fa;
  padding: 30px;
  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.1);

  i {
    font-size: 38px;
    line-height: 0;
    color: var(--accent-color);
  }

  h3 {
    font-size: 20px;
    font-weight: 700;
    margin: 20px 0 10px 0;
  }

  p {
    padding: 0;
    line-height: 24px;
    font-size: 14px;
    margin-bottom: 0;
  }
`;

const FormColumn = styled.div`
  flex: 1;
  min-width: 300px;
`;

const ContactForm = styled.form`
  background: #f8f9fa;
  padding: 30px;
  height: 100%;
  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.1);

  .form-group {
    margin-bottom: 24px;
  }

  input,
  textarea {
    width: 100%;
    font-size: 14px;
    padding: 12px 15px;
    border: none;
    border-bottom: 1px solid #ddd;
    background-color: transparent;
    transition: border-color 0.3s;

    &:focus {
      outline: none;
      border-color: #ffc107;
    }

    &::placeholder {
      color: #999;
    }
  }

  textarea {
    resize: vertical;
    min-height: 120px;
    border: 1px solid #ddd;
  }

  button {
    background: #ffc107;
    color: #fff;
    border: none;
    padding: 12px 30px;
    font-size: 16px;
    border-radius: 4px;
    cursor: pointer;
    transition: background-color 0.3s;

    &:hover {
      background: #e6ac00;
    }
  }
`;

const FormRow = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 24px;
  margin-bottom: 24px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const MessageStatus = styled.div`
  text-align: center;
  margin: 15px 0;
  color: #28a745;
  display: ${props => props.show ? 'block' : 'none'};
`;

const Contact = () => {
  const [showMessage, setShowMessage] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add form submission logic here
    
    // Show success message
    setShowMessage(true);
    
    // Clear form
    e.target.reset();
    
    // Hide message after 3 seconds
    setTimeout(() => {
      setShowMessage(false);
    }, 3000);
  };

  return (
    <Section id="contact" className="contact section">
      <Container data-aos="fade-up">
        <SectionTitle>
          <h2>Contact us</h2>
          <p>Celebrate their life. Share their legacy. Keep the memory alive with Starlight Memories</p>
        </SectionTitle>

        <Row data-aos="fade-up" data-aos-delay="100">
          <InfoColumn>
            <InfoGrid>
              <InfoItem data-aos="fade" data-aos-delay="200">
                <i className="bi bi-envelope"></i>
                <h3>Email</h3>
                <p>stalightmemories@gmail.com</p>
                <p>info@starlightmemories.co.zw</p>
              </InfoItem>

              <InfoItem data-aos="fade" data-aos-delay="300">
                <i className="bi bi-telephone"></i>
                <h3>Call Us</h3>
                <p>+263 776 787 671</p>
                <p>+263 787 380 000</p>
              </InfoItem>
            </InfoGrid>
          </InfoColumn>

          <FormColumn>
            <ContactForm onSubmit={handleSubmit} data-aos="fade-up" data-aos-delay="200">
              <FormRow>
                <input type="text" name="name" placeholder="Your Name" required />
                <input type="email" name="email" placeholder="Your Email" required />
              </FormRow>

              <div className="form-group">
                <input type="text" name="subject" placeholder="Subject" required />
              </div>

              <div className="form-group">
                <textarea name="message" rows="6" placeholder="Message" required></textarea>
              </div>

              <div style={{ textAlign: 'center' }}>
                <MessageStatus show={showMessage}>Your message has been sent. Thank you!</MessageStatus>
                <button type="submit">Send Message</button>
              </div>
            </ContactForm>
          </FormColumn>
        </Row>
      </Container>
    </Section>
  );
};

export default Contact; 