import styled, { css } from 'styled-components';

export const Container = styled.div`
  ${() => css`
    display: flex;

  `}
`;

export const Aside = styled.aside`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;

    background-color: ${theme.colors.fifthColor};
    flex: 1;
    z-index: 100;
    padding: 0px 30px;

    small {
      text-align: center;
      color: ${theme.colors.fourthColor};
    }

    h1 {
      color: ${theme.colors.fourthColor};
    }

  `}
`;

export const Section = styled.section`
  ${() => css`
    flex: 5;
    overflow-y: auto;
    max-height: 100vh;
    background-image: url('https://res.cloudinary.com/dh84pxwgu/image/upload/v1644348006/dan-gold-4_jhDO54BYg-unsplash_e7wcry.jpg');
    background-size: cover;
  `}
`;

// Componentes

export const ButtonContainer = styled.div`
  ${() => css`
    display: flex;
    flex-direction: column;
    gap: 20px;
  `}
`;
