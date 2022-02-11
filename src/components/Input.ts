import styled, { css } from 'styled-components';

export const Input = styled.input`
  ${() => css`
    padding: 8px 16px;
    border-radius: 8px;
    width: 250px;
    border: none;

    &:focus {
      outline: none;
    }

  `}
`;
