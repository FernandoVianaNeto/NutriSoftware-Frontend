import styled, { css } from 'styled-components';

export const InputForm = styled.input`
  ${({ theme }: any) => css`
  padding: 5px 10px;
  border: 2px solid ${theme.colors.fifthColor};
  border-top-right-radius: 16px;
  border-bottom-left-radius: 16px;

  &:focus {
    outline: none;
  }
  `}
`;
