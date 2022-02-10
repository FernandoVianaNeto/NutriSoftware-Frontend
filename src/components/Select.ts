import styled, { css } from 'styled-components';

type SelectProps = {
  selected?: boolean,
}

const selectedSelect = (theme: any) => css`
  background-color: ${theme.colors.fifthColor};
`;

export const Select = styled.select`
  ${({ selected = false }: SelectProps) => css`
    width: 100%;
    background-color: transparent;
    border: none;
    text-align: center;
    cursor: pointer;

    ${selected && selectedSelect};

    &:focus {
      outline: none;
    }
  `}
`;
