import styled from 'styled-components';
import { responsive } from '../../styles/responsive';

export const Container = styled.main`
  display: flex;
  margin: 0 auto;
  flex-direction: column;

  @media (min-width: ${responsive.md}) {
    max-width: 1200px;
  }
`;

export const BookImgContainer = styled.div`
  background: #fff6e5;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  margin-bottom: 4.19rem;
  padding: 55px 33px 0;
  position: relative;
  height: 35vh;

  > svg {
    position: absolute;
    font-size: 1.5rem;
    left: 33px;
    top: 55px;
  }

  > div {
    position: relative;
    top: 12%;
    width: 9.5rem;
    height: 14.5rem;

    svg {
      width: 100%;
      height: 100%;
    }
  }
`;

export const BookContent = styled.div`
  padding: 0 1.25rem 3.125rem;

  h1 {
    font-size: 1.5rem;
    font-weight: 500;
    margin-bottom: 0.5rem;
  }

  h3 {
    font-size: 1rem;
    color: ${({ theme }) => theme.colors.highLight};
    margin-bottom: 0.6rem;
  }

  p {
    color: #313131;
  }
`;
