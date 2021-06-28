import styled from 'styled-components';
import { responsive } from '../../styles/responsive';

export const Container = styled.main`
  padding: 3.125rem 1.25rem;
  display: flex;
  margin: 0 auto;
  flex-direction: column;

  @media (min-width: ${responsive.md}) {
    max-width: 1200px;
  }
`;

export const SearchBarSection = styled.section`
  margin-bottom: 50px;
`;

export const ContentSection = styled.section`
  display: flex;
  flex-direction: column;
`;

export const HelloUserContainer = styled.div`
  margin-bottom: 30px;
`;

export const HelloUser = styled.p`
  font-size: 1.6rem;
  font-family: Poppins, sans-serif;
  color: ${({ theme }) => theme.colors.gray[500]};

  span {
    color: ${({ theme }) => theme.colors.highLight};
    margin-right: 10px;
  }
`;

export const DiscoverSection = styled.section`
  display: flex;
  flex-direction: column;
  position: relative;
  margin-bottom: 1.87rem;
`;

export const DiscoverHeader = styled.div`
  display: inline-flex;
  justify-content: space-between;
  margin-bottom: 1rem;

  h1 {
    color: ${({ theme }) => theme.colors.gray[500]};
  }

  button {
    border: none;
    background: transparent;
    color: ${({ theme }) => theme.colors.link};
    font-family: Poppins, sans-serif;
    font-size: 0.87rem;
    z-index: 2;
  }
`;

export const OvalDetailContainer = styled.div`
  position: absolute;
  bottom: 6px;
  pointer-events: none;
`;

export const Oval2DetailContainer = styled.div`
  position: absolute;
  right: 0;
  pointer-events: none;
`;

export const CurrentlyReadingSection = styled.section`
  display: flex;
  flex-direction: column;
  margin-bottom: 45px;
`;

export const CurrentlyReadingHeader = styled.div`
  display: inline-flex;
  justify-content: space-between;
  margin-bottom: 30px;

  h1 {
    color: ${({ theme }) => theme.colors.gray[500]};
  }

  button {
    border: none;
    background: ${({ theme }) => theme.colors.background};
    color: ${({ theme }) => theme.colors.link};
    font-family: Poppins, sans-serif;
    font-size: 0.87rem;
  }
`;

export const ReviewsOfTheDaySection = styled.section`
  display: flex;
  flex-direction: column;
  position: relative;
  margin-bottom: 45px;
`;

export const ReviewsHeader = styled.div`
  display: inline-flex;
  justify-content: space-between;
  margin-bottom: 15px;

  h1 {
    color: ${({ theme }) => theme.colors.gray[500]};
  }

  button {
    border: none;
    background: ${({ theme }) => theme.colors.background};
    color: ${({ theme }) => theme.colors.link};
    font-family: Poppins, sans-serif;
    font-size: 0.87rem;
  }
`;
