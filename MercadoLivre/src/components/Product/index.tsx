import React from 'react';

import tshirtImage from '../../assets/tshirt.png';
import ProductAction from '../ProductAction';
import SellerInfo from '../SellerInfo';

import {
  Container,
  Row,
  Panel,
  Column,
  Gallery,
  Section,
  Description,
  Others,
  Slide,
  OtherProducts,
  PriceCard,
  PriceRow,
  InstallmentsInfo,
  CheckIcon,
  Details,
  ItemDescription } from './styles';

const Product: React.FC = () => {
  return(
    <Container>
      <Row>
        <a href="/" >Compartilhar</a>
        <a href="/" >Vender</a>
      </Row>

      <Panel>
        <Column>
          <Gallery>
            <img src={tshirtImage} alt="T-Shirt" />
          </Gallery>

          <Info />
        </Column>

        <Column>
          <ProductAction />
          <SellerInfo />

          <WarrantySection />
          <WarrantySection />
          <WarrantySection />
        </Column>
      </Panel>
    </Container>
  )
}

const WarrantySection = () => (
  <Section>
    <h4>Garantia</h4>

    <div>
      <span>
        <p  className="title">Compra garantida com o Lorem Ipsum</p>
        <p className="description">Receba o produto que está esperando ou devolvemos o seu dinheiro</p>
      </span>
      <span>
        <p  className="title">Garantia do vendedor</p>
        <p className="description">Sem garantia </p>
      </span>
    </div>

    <a href="/" >Saiba mais sobre garantia</a>

  </Section>
)

const Info = () => (
  <>
    <Others>
      <h2>Quem viu também comprou</h2>

      <Slide>
        <OtherProducts>
          <img src={tshirtImage} alt="tshirt" ></img>

          <PriceCard>
            <PriceRow>
              <span className="symbol" >R$</span>
              <span className="fraction" >39</span>
              <span className="cents" >99</span>
              <span className="discount" >12% OFF</span>
            </PriceRow>

            <InstallmentsInfo>em 3x de R$ 11,67</InstallmentsInfo>

            <Details>
              <span>Frete Grátis</span>
              <CheckIcon />
            </Details>

            <ItemDescription>
              <p>Camiseta branca basica comum</p>
            </ItemDescription>
          </PriceCard>
        </OtherProducts>
        <OtherProducts>
          <img src={tshirtImage} alt="tshirt" ></img>

          <PriceCard>
            <PriceRow>
              <span className="symbol" >R$</span>
              <span className="fraction" >39</span>
              <span className="cents" >99</span>
              <span className="discount" >12% OFF</span>
            </PriceRow>

            <InstallmentsInfo>em 3x de R$ 11,67</InstallmentsInfo>

            <Details>
              <span>Frete Grátis</span>
              <CheckIcon />
            </Details>

            <ItemDescription>
              <p>Camiseta branca basica comum</p>
            </ItemDescription>
          </PriceCard>
        </OtherProducts>


      </Slide>
    </Others>

    <Description>
      <h2>Descrição</h2>

      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur atque eaque, cum a
        lias, ex, consequuntur soluta est placeat modi consectetur iusto aliquid iure ipsum quos
        ab voluptate libero doloremque laudantium?

        <br />
        <br />
          Itens inclusos: <br />
          - 1x LED <br />
          - 1x LED <br />
          - 1x LED <br />
          - 1x LED <br />
          - 1x LED <br />
          <br />

          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur atque eaque, cum a
        lias, ex, consequuntur soluta est placeat modi consectetur iusto aliquid iure ipsum quos
        ab voluptate libero doloremque laudantium?
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur atque eaque, cum a
        lias, ex, consequuntur soluta est placeat modi consectetur iusto aliquid iure ipsum quos
        ab voluptate libero doloremque laudantium?
      </p>
    </Description>
  </>
)

export default Product;
