import styled, { css } from 'styled-components';

interface AsideProps {
  theme: any,
  showMenu?: boolean,
}

const setAsideMenu = () => css`
  visibility: visible;
  min-height: 100vh;
`;

export const Container = styled.div`
  ${({ theme }: any) => css`
    display: flex;
    height: 100vh;

    .show-button {
      position: absolute;
      margin-left: 10px;
      margin-top: 10px;
      background-color: transparent;
      border: none;
      font-size: 30px;
      color: ${theme.colors.fourthColor};
    }
    .close-button {
      position: absolute;
      margin-left: 10px;
      margin-top: 10px;
      background-color: transparent;
      border: none;
      font-size: 30px;
      color: ${theme.colors.fourthColor};
      z-index: 200;
    }
  `}
`;

export const Aside = styled.aside`
  ${({ theme, showMenu }: AsideProps) => css`
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

    @media ${theme.media.lteMedium} {
      visibility: hidden;
      position: absolute;

      ${showMenu && setAsideMenu};
    }
  `}
`;

export const Section = styled.section`
  ${({ theme }: any) => css`
    flex: 5;
    overflow-y: auto;
    max-height: 100vh;
    background-image: url('https://res.cloudinary.com/dh84pxwgu/image/upload/v1644348006/dan-gold-4_jhDO54BYg-unsplash_e7wcry.jpg');
    background-size: cover;

    @media ${theme.media.lteMedium} {
      max-width: 100vw;
      display: flex;
      flex-direction: column;
      text-align: center;
    }
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
