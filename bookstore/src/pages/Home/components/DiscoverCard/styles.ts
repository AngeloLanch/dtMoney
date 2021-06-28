import styled from 'styled-components';

interface ContainerProps {
  isOdd: boolean;
}

export const Container = styled.div<ContainerProps>`
  box-shadow: ${({ theme }) => theme.shadow};
  border-radius: 5px;
  background: ${({ theme }) => theme.colors.gray[300]};
  display: flex;
  flex-direction: row;
  padding: 1.3rem 1.25rem;
  background: ${({ isOdd }) => (isOdd ? '#451475' : '#00173D')};
  cursor: pointer;
`;

export const BookInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;

  h1 {
    color: ${({ theme }) => theme.colors.white};
    font: 27px Playfair;
    font-weight: 700;
  }

  h2 {
    color: ${({ theme }) => theme.colors.gray[250]};
    font-size: 0.87rem;
    line-height: 2;
    font-weight: 100;
    font-style: italic;
  }

  div {
    color: ${({ theme }) => theme.colors.gray[250]};
    font-weight: 100;
    font-size: 0.62rem;
    margin-top: 1.87rem;
    display: inline-flex;
    height: 100%;
    align-items: flex-end;

    svg {
      margin-right: 2px;
      border: 1px solid;
      border-radius: 2px;
      font-size: 0.7rem;
    }
  }
`;

export const BookImageContainer = styled.div`
  display: flex;
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
