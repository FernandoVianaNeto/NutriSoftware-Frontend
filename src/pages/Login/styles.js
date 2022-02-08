import styled, { css } from 'styled-components';

export const Container = styled.div`
  ${() => css`
    display: flex;
    width: 100vw;
    height: 100vh;
  `}
`;

export const Aside = styled.aside`
  ${({ theme }) => css`  
    flex: 2;
    background-color: ${theme.colors.fifthColor};
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    z-index: 200;

    box-shadow: 0 0 2em ${theme.colors.fifthColor};

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

export const FormContainer = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    gap: 50px;
    background-color: ${theme.colors.fifthColor};
    padding: 50px;
    border-radius: 40px;
  `}
`;

export const SectionContent = styled.div`
  ${({ theme }) => css`
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 70px;

    background-size: cover;
    background-image: url('https://res.cloudinary.com/dh84pxwgu/image/upload/v1644341388/brooke-lark-HlNcigvUi4Q-unsplash_1_iwj5ga.jpg');

    img {
      z-index: -2;
      max-height: 100vh;
      position: absolute;
    }

    h1 {
      text-align: center;
      color: ${theme.colors.fourthColor};
      font-weight: bold;
    }
  `}
`;
