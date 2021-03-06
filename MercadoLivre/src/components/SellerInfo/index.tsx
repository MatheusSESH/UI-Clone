import React from 'react';

import { Container, Title, LocationCard, LocationIcon, ReputationCard, ReputationThermometer, ReputationRow, SupportIcon, ClockIcon, More } from './styles';

const SellerInfo: React.FC = () => {
  return(
    <Container>
      <Title>Informações sobre o vendedor</Title>

      <LocationCard>
        <LocationIcon />

        <div>
          <p>Localizção</p>
          <strong>Salvador, Bahia</strong>
        </div>
      </LocationCard>

      <ReputationCard>
        <ReputationThermometer>
          <li />
          <li />
          <li />
          <li />
          <li className="active" />
        </ReputationThermometer>

        <ReputationRow>
          <div>
            <strong>593</strong>
            <span>Vendas nos ultimos 4 meses</span>
          </div>

          <div>
            <strong><SupportIcon /></strong>
            <span>Presta um bom atendimento</span>
          </div>

          <div>
            <strong><ClockIcon /></strong>
            <span>Vendas nos ultimos 4 meses</span>
          </div>
        </ReputationRow>
      </ReputationCard>

      <More href="#" >Ver mais dados do vendedor</More>
    </Container>
  )
}

export default SellerInfo;
