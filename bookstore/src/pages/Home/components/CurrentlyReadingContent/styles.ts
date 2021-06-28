import styled from 'styled-components';
import { responsive } from '../../../../styles/responsive';

export const TransparentBorder = styled.div`
  border-width: 30px 30px 30px 0;
  border-color: rgba(242, 242, 242, 0.5);
  border-style: solid;
  height: 160px;
  position: relative;
  bottom: 130px;
`;

export const Container = styled.div`
  border-radius: 5px;
  display: flex;
  position: relative;
  align-items: center;
`;

export const BookImageContainer = styled.div`
  display: flex;
  width: 28%;
  max-width: 50%;
  cursor: pointer;
  z-index: 2;

  svg {
    width: 100%;
    height: 100%;
  }
`;

export const BookInfoContainer = styled.div`
  position: absolute;
  right: 20px;
  background: #eef5db;
  display: flex;
  flex-direction: column;
  width: 100%;
  color: ${({ theme }) => theme.colors.gray[800]};
  padding: 0.62rem 0 0.62rem 34vw;
  max-height: 290px;
  height: 24vw;

  @media (min-width: ${responsive.md}) {
    text-align: center;
    display: flex;
  }

  h1 {
    font-family: Playfair;
    font-weight: 700;
  }

  h2 {
    color: ${({ theme }) => theme.colors.gray[400]};
    font-size: 0.87rem;
    margin-top: 0.5rem;
    line-height: 12px;
    font-weight: 100;
    font-style: italic;
  }

  div {
    color: ${({ theme }) => theme.colors.gray[800]};
    font-weight: 100;
    display: inline-flex;
    height: 100%;
    align-items: center;
    height: 100%;
    margin-top: 1rem;
    font-size: 0.8rem;

    @media (min-width: ${responsive.md}) {
      align-items: center;
      justify-content: center;
    }

    span {
      color: ${({ theme }) => theme.colors.highLight};
    }

    svg {
      margin-right: 10px;
      border: 1px solid;
      border-radius: 2px;
      font-size: 0.7rem;
      color: #9013fe;
    }
  }
`;

export const GraphicDetailsContainer = styled.div`
  position: absolute;
  transform: translate(-51%, -13%);
  height: 109px;
  width: 78px;
  pointer-events: none;

  > svg {
    margin-left: 5px;
  }

  div {
    margin-top: 60px;

    svg {
      margin-left: 5px;
    }
  }
`;
