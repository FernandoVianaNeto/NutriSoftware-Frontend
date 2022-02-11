import styled, { css } from 'styled-components';

export const Button = styled.button`
  ${({ theme }:any) => css`
    display: flex;
    align-items: center;
    gap: 10px;

    padding: 8px 32px;

    background-color: ${theme.colors.fourthColor};
    border: 2px solid ${theme.colors.thirdColor};
    border-radius: 4px;
    cursor: pointer;
    color: ${theme.colors.primaryColor};

    font-family: ${theme.font.family.primaryFont};
    font-weight: bold;

    &[disabled] {
      color: ${theme.colors.fourthColor};
      background-color: ${theme.colors.thirdColor};
      border: 2px solid ${theme.colors.thirdColor};
      cursor: default;
    }

    &:active {
      background-color: ${theme.colors.fourthColor};
    }
  `}
`;
