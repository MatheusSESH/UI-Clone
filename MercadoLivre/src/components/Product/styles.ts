import styled from 'styled-components';
import { HiOutlineCheckCircle } from 'react-icons/hi';


export const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Row = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding: 16px 0;

  a {
    font-size: 14px;
    text-decoration: none;
    color: var(--color-blue);
    padding: 2.5px 0;

    & + a {
      padding-left: 10px;
      border-left: 1px solid var(--color-border);
      margin-left: 10px;
    }
  }

`;
export const Panel = styled.div`
  background: var(--color-white);
  box-shadow: var(--panel-shadow);

  display: grid;
  grid-template-columns: 65fr 35fr;

`;
export const Column = styled.div`
  &:first-child {
    border-right: 1px solid var(--color-border);
  }
`;
export const Gallery = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 530px;

  > img {
    height: 73%;
  }
`;
export const Section = styled.div`
  border-top: 1px solid var(--color-border);
  padding: 48px 32px;

  display: flex;
  flex-direction: column;

  > h4 {
    font-size: 18px;
    margin-bottom: 40px;
  }

  > div {
     display: flex;
     flex-direction: column;

     > span + span {
       margin-top: 16px;
     }

     .title {
       font-size: 16px;
       color: var(--color-black);
     }

     .description {
       margin: 5px;
       font-size: 14px;
       color: var(--color-gray);
       line-height: 19px;
     }
    }
  > a {
    margin-top: 20px;
    font-size: 14px;
    font-weight: 600;
    color: var(--color-blue);
    text-decoration: none;
  }
`;
export const Description = styled.div`
  border-top: 1px solid var(--color-border);
  padding: 44px 32px;

  > h2 {
    font-size: 24px;
    margin-bottom: 32px;
  }

  > p {
    font-size: 20px;
    color: var(--color-gray);
    line-height: 27px;

  }
`;

export const Others = styled.div`
  border-top: 1px solid var(--color-border);
  padding: 44px 32px;

  > h2 {
    font-size: 24px;
    margin-bottom: 32px;
  }
`;

export const Slide = styled.div`
  display: flex;
  flex-direction: row;

`;

export const OtherProducts = styled.div`
  display: flex;
  width: 236px;
  height: 420px;
  flex-direction: column;

  border: 1px solid var(--color-border);
  border-radius: 4px;

  > img {
    padding: 0 12px;
    width: 220px;
    height: 220px;
  }

  margin-right: 15px;

  &:last-child {
    margin-right: 0;
  }
`;

export const PriceCard = styled.div`
  padding: 16px 12px;
  display: flex;
  flex-direction: column;

  border-top: 1px solid var(--color-border);
`;

export const PriceRow = styled.div`
  display: flex;
  align-items: flex-start;
  font-size: 22px;
  font-weight: 600;
  color: #333;

  .fraction {
    margin-left: 8.8px;
  }

  .cents {
    font-size: 11px;
    padding-top: 2px;
    margin-left: 1px;
  }

  .discount {
    padding: 10px 0 0 4px;
    font-size: 12px;
    margin: 2px 0px -4px;
    color: var(--color-green);
    font-weight: 600;
  }

`;

export const InstallmentsInfo = styled.div`
  margin-top: 10px;
  font-size: 14px;
`;

export const Details = styled.div`
  display: flex;
  margin-top: 10px;

  > span {
    font-size: 12px;
    color: var(--color-green);
    margin-right: 8px;

  }
`;

export const CheckIcon = styled(HiOutlineCheckCircle)`
  color: var(--color-green);
`;

export const ItemDescription = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;

  margin-top: 20px;

  > p {
    font-size: 14px;
    color: #000000CC
  }
`;

