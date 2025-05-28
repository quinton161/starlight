import React from 'react';
import styled from 'styled-components';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

const Section = styled.section`
  padding: 60px 0;
  background-color: #f9f9f9;
  overflow: hidden;

  @media (max-width: 768px) {
    padding: 40px 0;
  }
`;

const Container = styled.div`
  max-width: 1200px;
  margin: auto;
  padding: 0 15px;

  @media (max-width: 480px) {
    padding: 0 10px;
  }
`;

const Row = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  margin: 0 -15px;

  @media (max-width: 991px) {
    flex-direction: column;
    margin: 0;
  }
`;

const Info = styled.div`
  flex: 1;
  padding: 20px;
  min-width: 300px;

  h3 {
    font-weight: 700;
    font-size: 32px;
    margin-bottom: 15px;

    @media (max-width: 768px) {
      font-size: 28px;
      text-align: center;
    }

    @media (max-width: 480px) {
      font-size: 24px;
    }
  }

  p {
    margin-top: 10px;
    color: #555;
    line-height: 1.6;

    @media (max-width: 768px) {
      text-align: center;
      font-size: 15px;
    }
  }

  @media (max-width: 991px) {
    padding: 20px 0;
    margin-bottom: 20px;
  }
`;

const SwiperContainer = styled.div`
  flex: 1;
  padding: 20px;
  background-color: #fff;
  box-shadow: 0 15px 30px 0 rgba(0, 0, 0, 0.05);
  border-radius: 8px;
  min-width: 300px;

  .swiper {
    width: 100%;
    height: 100%;
  }

  .swiper-slide {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .swiper-pagination {
    position: relative;
    margin-top: 20px;
  }

  .swiper-pagination-bullet {
    width: 10px;
    height: 10px;
    background: rgba(50, 53, 58, 0.2);
    opacity: 1;
    margin: 0 5px !important;

    @media (max-width: 480px) {
      width: 8px;
      height: 8px;
    }
  }

  .swiper-pagination-bullet-active {
    background-color: #ffc107;
  }

  @media (max-width: 991px) {
    width: 100%;
  }

  @media (max-width: 480px) {
    padding: 15px;
  }
`;

const TestimonialItem = styled.div`
  padding: 20px;
  width: 100%;

  @media (max-width: 480px) {
    padding: 10px;
  }

  .profile {
    display: flex;
    align-items: center;
    gap: 15px;
    margin-bottom: 20px;

    @media (max-width: 480px) {
      flex-direction: column;
      text-align: center;
      gap: 10px;
    }
  }

  .testimonial-img {
    width: 80px;
    height: 80px;
    border-radius: 50%;
    border: 4px solid #f9f9f9;
    object-fit: cover;

    @media (max-width: 480px) {
      width: 70px;
      height: 70px;
    }
  }

  .profile-info {
    flex: 1;

    @media (max-width: 480px) {
      display: flex;
      flex-direction: column;
      align-items: center;
    }
  }

  h3 {
    font-size: 18px;
    font-weight: 600;
    margin: 0 0 5px 0;
    color: #333;

    @media (max-width: 480px) {
      font-size: 16px;
    }
  }

  h4 {
    font-size: 14px;
    color: #777;
    margin: 0 0 8px 0;

    @media (max-width: 480px) {
      font-size: 13px;
    }
  }

  .stars {
    color: #ffc107;
    font-size: 14px;
    
    i {
      margin-right: 2px;
    }

    @media (max-width: 480px) {
      font-size: 12px;
    }
  }

  .testimonial-content {
    position: relative;
    padding: 0 10px;
  }

  p {
    font-style: italic;
    margin: 0;
    color: #555;
    line-height: 1.6;
    font-size: 15px;
    text-align: center;

    @media (max-width: 480px) {
      font-size: 14px;
    }
  }

  .quote-icon-left,
  .quote-icon-right {
    color: rgba(255, 193, 7, 0.3);
    font-size: 20px;
    line-height: 0;
    position: relative;
    top: -2px;

    @media (max-width: 480px) {
      font-size: 16px;
    }
  }

  .quote-icon-left {
    margin-right: 5px;
  }

  .quote-icon-right {
    margin-left: 5px;
    display: inline-block;
    transform: scale(-1, -1);
  }
`;

const testimonials = [
  {
    img: 'assets/img/testimonials/testimonials-1.jpg',
    name: 'Saul Johnson',
    subtitle: 'A beautiful way to keep his memory alive.',
    message: `When we visited Dad's grave, being able to scan the QR code and see his photos and videos brought so much comfort.`,
  },
  {
    img: 'assets/img/testimonials/testimonials-2.jpg',
    name: 'Grace & Family',
    subtitle: 'A modern touch to remembrance.',
    message: `Starlight Memories helped us create a page that truly captured our mother's legacy.`,
  },
  {
    img: 'assets/img/testimonials/testimonials-3.jpg',
    name: 'Jena Karlis',
    subtitle: 'More than just a tombstone',
    message: `The QR code gave our family a place to share stories, light virtual candles, and keep Grandma's spirit alive.`,
  },
  {
    img: 'assets/img/testimonials/testimonials-4.jpg',
    name: 'Matt Brandon',
    subtitle: 'A beautiful tribute that lasts.',
    message: `Starlight Memories made it so easy to honour my brother in a meaningful way.`,
  },
  {
    img: 'assets/img/testimonials/testimonials-5.jpg',
    name: 'John Larson',
    subtitle: 'Grateful for this beautiful innovation.',
    message: `I wasn't sure what to expect, but the QR memorial was the perfect blend of tradition and technology.`,
  },
];

const Testimonials = () => {
  return (
    <Section id="testimonials">
      <Container>
        <Row>
          <Info>
            <h3>Starlight Memories Testimonials</h3>
            <p>
              Hear what others say about Starlight Memories and how it changed their view for loved ones. It always feels like you are still together.
            </p>
          </Info>
          <SwiperContainer>
            <Swiper
              modules={[Pagination, Autoplay]}
              loop={true}
              autoplay={{ delay: 5000, disableOnInteraction: false }}
              slidesPerView={1}
              pagination={{ clickable: true }}
              spaceBetween={30}
            >
              {testimonials.map((testimonial, index) => (
                <SwiperSlide key={index}>
                  <TestimonialItem>
                    <div className="profile">
                      <img
                        src={testimonial.img}
                        alt={testimonial.name}
                        className="testimonial-img"
                      />
                      <div className="profile-info">
                        <h3>{testimonial.name}</h3>
                        <h4>{testimonial.subtitle}</h4>
                        <div className="stars">
                          {'★★★★★'.split('').map((_, i) => (
                            <i className="bi bi-star-fill" key={i}></i>
                          ))}
                        </div>
                      </div>
                    </div>
                    <div className="testimonial-content">
                      <p>
                        <span className="quote-icon-left">"</span>
                        {testimonial.message}
                        <span className="quote-icon-right">"</span>
                      </p>
                    </div>
                  </TestimonialItem>
                </SwiperSlide>
              ))}
            </Swiper>
          </SwiperContainer>
        </Row>
      </Container>
    </Section>
  );
};

export default Testimonials; 