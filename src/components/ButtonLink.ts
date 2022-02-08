import styled, { css } from 'styled-components';

const selectedButton = ({ theme }: any) => css`
  background-color: ${theme.colors.fourthColor};
  color: ${theme.colors.fifthColor};
`;

export const ButtonLink = styled.a`
  ${({ theme, selected }: any) => css`
    background-color: transparent;
    
    color: ${theme.colors.fourthColor};


    ${selected && selectedButton};
  `}
`;
