import styled, { css } from 'styled-components';

interface ButtonLinkProps {
  theme: any,
  selected?: boolean
}

const selectedButton = ({ theme }: any) => css`
  background-color: ${theme.colors.fourthColor};

  color: ${theme.colors.fifthColor};
  border-top-right-radius: 20px;
  border-bottom-left-radius: 20px;
`;

export const ButtonLink = styled.a`
  ${({ theme, selected }: ButtonLinkProps) => css`
    display: flex;
    align-items: center;
    gap: 10px;

    background-color: transparent;
    padding: 10px 20px;
    font-size: 18px;
    color: ${theme.colors.fourthColor};
    text-decoration: none;

    ${selected && selectedButton};
  `}
`;
