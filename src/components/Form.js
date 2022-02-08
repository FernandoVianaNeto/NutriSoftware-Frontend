import styled, { css } from 'styled-components';

export const Form = styled.form`
  ${() => css`
    display: flex;
    flex-direction: column;
    gap: 20px;
    align-items: center;
    justify-content: center;
    width: 100%;
  `}
`;
