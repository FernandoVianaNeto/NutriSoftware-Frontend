import styled, { css } from 'styled-components';

export const Input = styled.input`
  ${({ theme }) => css`
    padding: 8px 16px;
    border-radius: 8px;
    width: 250px;
    /* border: 1px solid ${theme.colors.thirdColor}; */
    border: none;

    &:focus {
      outline: none;
    }

  `}
`;
