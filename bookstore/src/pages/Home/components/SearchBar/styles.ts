import styled from 'styled-components';

export const Container = styled.form`
  background: ${({ theme }) => theme.colors.gray[200]};
  box-shadow: 5px 5px 80px rgba(212, 173, 134, 0.122623);
  border-radius: 10px;
  padding: 0.94rem 2.56rem;
  position: relative;

  svg {
    color: ${({ theme }) => theme.colors.gray[300]};
    position: absolute;
    left: 1rem;
    top: 50%;
    right: 50%;
    transform: translateY(-50%) scale(-1, 1);
  }
`;

export const SearchInput = styled.input`
  background: ${({ theme }) => theme.colors.gray[200]};
  color: ${({ theme }) => theme.colors.gray[400]};
  border: none;
`;
