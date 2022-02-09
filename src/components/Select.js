import styled, { css } from 'styled-components';

export const Select = styled.select`
  ${() => css`
    width: 100%;
    background-color: transparent;
    border: none;
    text-align: center;
    cursor: pointer;
    &:focus {
      outline: none;
    }
  `}
`;
