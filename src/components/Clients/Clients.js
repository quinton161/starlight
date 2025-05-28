import React from 'react';
import styled from 'styled-components';

const ClientsSection = styled.section`
  padding: 20px 0;
  background: #fff;
`;

const Container = styled.div`
  max-width: 1800px;
  margin: 0 auto;
  padding: 0 20px;
`;

const LogoGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  gap: 30px;
  
  @media (max-width: 1200px) {
    grid-template-columns: repeat(4, 1fr);
  }
  
  @media (max-width: 768px) {
    grid-template-columns: repeat(3, 1fr);
  }
  
  @media (max-width: 640px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 20px;
  }
`;

const ClientLogo = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  padding: 20px;

  img {
    max-width: 90%;
    transition: all 0.3s ease;
    opacity: 0.5;
    filter: grayscale(100);

    &:hover {
      filter: none;
      opacity: 1;
      transform: scale(1.05);
    }
  }

  @media (max-width: 640px) {
    padding: 15px;
  }
`;

const clients = [
  { id: 1, name: 'MYOB', logo: '/assets/img/clients/client-1.png' },
  { id: 2, name: 'Belimo', logo: '/assets/img/clients/client-2.png' },
  { id: 3, name: 'Life Groups', logo: '/assets/img/clients/client-3.png' },
  { id: 4, name: 'Grabyo', logo: '/assets/img/clients/client-4.png' },
  { id: 5, name: 'Citrus', logo: '/assets/img/clients/client-5.png' },
  { id: 6, name: 'Trustly', logo: '/assets/img/clients/client-6.png' }
];

const Clients = () => {
  return (
    <ClientsSection id="clients">
      <Container>
        <LogoGrid>
          {clients.map((client) => (
            <ClientLogo key={client.id}>
              <img src={client.logo} alt={client.name} className="img-fluid" />
            </ClientLogo>
          ))}
        </LogoGrid>
      </Container>
    </ClientsSection>
  );
};

export default Clients; 