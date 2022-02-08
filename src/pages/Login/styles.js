import styled, { css } from 'styled-components';

export const Container = styled.div`
  ${() => css`
    display: flex;
  `}
`;

export const Aside = styled.aside`
  ${({ theme }) => css`  
    flex: 2;
    background-color: ${theme.colors.contrastColorDarker};
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    z-index: 200;

    box-shadow: 0 0 2em ${theme.colors.contrastColorDarker};

    h1 {
      color: ${theme.colors.fourthColor};
      font-family: ${theme.font.family.primaryFont};
    }

    strong {
      color: ${theme.colors.fourthColor};
      font-family: ${theme.font.family.primaryFont};
    }

  `}
`;

export const Section = styled.section`
  ${() => css`
    flex: 5;
    padding: 20px;
  `}
`;

// Components

export const InputContainer = styled.div`
  ${({ theme }) => css`
    flex: 5;
    padding: 0px 10px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 5px;
    background-color: ${theme.colors.fourthColor};
    border-radius: 8px;
  `}
`;
