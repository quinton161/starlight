import React, { useState } from 'react';
import styled from 'styled-components';
import { BiChevronRight } from 'react-icons/bi';

const FaqSection = styled.section`
  padding: 60px 0;
  background-color: #fff;
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
`;

const Row = styled.div`
  display: grid;
  grid-template-columns: 4fr 8fr;
  gap: 24px;

  @media (max-width: 992px) {
    grid-template-columns: 1fr;
  }
`;

const Content = styled.div`
  padding: 0 40px;

  @media (max-width: 1200px) {
    padding: 0;
  }

  h3 {
    font-weight: 400;
    font-size: 34px;
    margin-bottom: 20px;

    strong {
      font-weight: 700;
    }
  }

  p {
    font-size: 15px;
    color: rgba(50, 53, 58, 0.7);
  }
`;

const FaqContainer = styled.div``;

const FaqItem = styled.div`
  background-color: #fff;
  position: relative;
  padding: 20px;
  margin-bottom: 20px;
  box-shadow: 0px 5px 25px 0px rgba(0, 0, 0, 0.1);
  overflow: hidden;

  &:last-child {
    margin-bottom: 0;
  }
`;

const FaqQuestion = styled.h3`
  font-weight: 600;
  font-size: 18px;
  line-height: 24px;
  margin: 0 30px 0 0;
  transition: 0.3s;
  cursor: pointer;
  display: flex;
  align-items: flex-start;
  color: ${props => props.isActive ? '#e6b908' : 'inherit'};

  &:hover {
    color: #e6b908;
  }

  .num {
    color: #e6b908;
    padding-right: 5px;
  }
`;

const FaqContent = styled.div`
  display: grid;
  grid-template-rows: ${props => props.isActive ? '1fr' : '0fr'};
  transition: 0.3s ease-in-out;
  visibility: ${props => props.isActive ? 'visible' : 'hidden'};
  opacity: ${props => props.isActive ? '1' : '0'};
  padding-top: ${props => props.isActive ? '10px' : '0'};

  p {
    margin-bottom: 0;
    overflow: hidden;
    color: rgba(50, 53, 58, 0.7);
  }
`;

const FaqToggle = styled.div`
  position: absolute;
  top: 20px;
  right: 20px;
  font-size: 16px;
  line-height: 0;
  transition: 0.3s;
  cursor: pointer;
  transform: ${props => props.isActive ? 'rotate(90deg)' : 'rotate(0)'};
  color: ${props => props.isActive ? '#e6b908' : 'inherit'};

  &:hover {
    color: #e6b908;
  }
`;

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const faqItems = [
    {
      num: '1',
      question: 'What is a QR Code Tombstone?',
      answer: "It's a modern memorial that features a QR code engraved or attached to a tombstone. When scanned, it leads to a personalized online tribute page."
    },
    {
      num: '2',
      question: 'What kind of content can be linked to the QR code?',
      answer: 'You can include a biography, photos, videos, audio messages, a timeline, and heartfelt tributes from family and friends.'
    },
    {
      num: '3',
      question: 'Can we update the page after it\'s live?',
      answer: 'Absolutely. You can update the content at any time—add photos, change text, or even redesign the page.'
    },
    {
      num: '4',
      question: 'Do you offer design help for the memorial page?',
      answer: 'Yes. We assist in designing a beautiful, respectful tribute tailored to your preferences and your loved one\'s story.'
    },
    {
      num: '5',
      question: 'Will the QR code fade or get damaged?',
      answer: 'We use weather-resistant materials like stainless steel or ceramic, ensuring durability and long-term visibility.'
    }
  ];

  const toggleFaq = (index) => {
    setActiveIndex(activeIndex === index ? -1 : index);
  };

  return (
    <FaqSection id="faq" className="faq section">
      <Container>
        <Row>
          <div data-aos="fade-up" data-aos-delay="100">
            <Content>
              <h3><span>Frequently Asked </span><strong>Questions</strong></h3>
              <p>
                Here are some few frequently asked Questions from our customers which can guide you with quick responses.
              </p>
            </Content>
          </div>

          <div data-aos="fade-up" data-aos-delay="200">
            <FaqContainer>
              {faqItems.map((item, index) => (
                <FaqItem key={index} className={activeIndex === index ? 'faq-active' : ''}>
                  <FaqQuestion 
                    onClick={() => toggleFaq(index)}
                    isActive={activeIndex === index}
                  >
                    <span className="num">{item.num}.</span>
                    <span>{item.question}</span>
                  </FaqQuestion>
                  <FaqContent isActive={activeIndex === index}>
                    <p>{item.answer}</p>
                  </FaqContent>
                  <FaqToggle 
                    isActive={activeIndex === index}
                    onClick={() => toggleFaq(index)}
                  >
                    <BiChevronRight />
                  </FaqToggle>
                </FaqItem>
              ))}
            </FaqContainer>
          </div>
        </Row>
      </Container>
    </FaqSection>
  );
};

export default FAQ; 