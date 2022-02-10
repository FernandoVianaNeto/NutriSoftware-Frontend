import styled, { css } from 'styled-components';

type SelectProps = {
  theme: any
  selected?: boolean,
}

const selectedSelect = () => css`
  text-decoration: underline blue;
`;

export const SelectForm = styled.select`
  ${({ theme, selected }: SelectProps) => css`
    padding: 5px 10px;
    width: 300px;
    border: 2px solid ${theme.colors.fifthColor};
    border-top-right-radius: 16px;
    border-bottom-left-radius: 16px;

    option {
      ${selected && selectedSelect};
    }



    &:focus {
      outline: none;
    }
  `}
`;
