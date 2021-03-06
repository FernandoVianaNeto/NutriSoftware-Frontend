import styled, { css } from 'styled-components';

export const Container = styled.div`
  ${() => css`

  `}
`;

export const SectionContent = styled.div`
  ${({ theme }: any) => css`
    padding: 50px;

    h1 {
      color: ${theme.colors.fifthColor};
    }

    max-width: 1000px;
    margin: 0 auto;

    @media ${theme.media.lteMedium} {
      max-width: 100vw;
      padding: 50px 0px;
    }
  `}
`;

// Componentes

export const MealsContainer = styled.div`
  ${({ theme }: any) => css`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;
    padding: 50px;
    background-color:  ${theme.colors.fourthColor};
    border-radius: 20px;
    min-height: 270px;

    strong {
      color: ${theme.colors.fifthColor};
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 20px;

      .icon {
        font-size: 20px;
      }
    }

    .no-meal {
      display: flex;
      flex-direction: column;
      align-items: center;

      a {
        background-color: ${theme.colors.fifthColor};
        color: ${theme.colors.fourthColor};
        text-decoration: none;
        display: flex;
        align-items: center;
        gap: 20px;
        padding: 10px 20px;
        border-top-right-radius: 20px;
        border-bottom-left-radius: 20px;
        box-shadow: 0.3em 0.5em 0.5em ${theme.colors.fifthColor}
      }
    }
  `}
`;

export const Filters = styled.div`
  ${({ theme }: any) => css`
    display: flex;
    justify-content: space-between;

    margin: 20px 0px;
    border-radius: 10px;

    h2 {
      color: ${theme.colors.fifthColor};
    }
  `}
`;

export const FiltersButtonContainer = styled.div`
  ${({ theme }: any) => css`
    border-radius: 20px;
    background-color: ${theme.colors.fourthColor};
    width: 100%;
    padding: 20px 50px;

    button {
      background: transparent;
      border: none;
      cursor: pointer;

      .icon {
        font-size: 20px;
      }
    }

    table {
      width: 100%;
    }

    td {
      text-align: center;
      width: 100px;
      font-size: 14px;
    }

    .options {
      margin-left: 0px;
      width: 50px;

      cursor: default;
    }
  `}
`;

export const Group = styled.div`
  ${({ theme }: any) => css`
    display: flex;
    align-items: center;
    gap: 10px;

    @media ${theme.media.lteMedium} {
      flex-direction: column;
    }
  `}
`;

export const Header = styled.header`
  ${({ theme }: any) => css`
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 10px;

    background-color: ${theme.colors.fourthColor};
    padding: 20px 20px;
    border-radius: 20px;

    h3 {
      color: ${theme.colors.fifthColor};
      span {
        color: ${theme.colors.secondaryColor};
      }
    }

    @media ${theme.media.lteMedium} {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
    }
  `}
`;

export const MacrosContainer = styled.header`
  ${({ theme }: any) => css`
    display: flex;
    align-items: center;
    gap: 10px;

    background-color: ${theme.colors.fourthColor};
    padding: 20px 20px;
    border-radius: 20px;

    @media ${theme.media.lteMedium} {
      flex-direction: column;
    }
  `}
`;

export const DataSearch = styled.div`
  ${({ theme }: any) => css`
    margin-top: 20px;
    display: flex;
    align-items: center;
    justify-content: space-between;

    background-color: ${theme.colors.fourthColor};
    padding: 20px 20px;
    border-radius: 20px;

    h3 {
      color: ${theme.colors.fifthColor};

      span {
        color: ${theme.colors.thirdColor};
      }
    }

    @media ${theme.media.lteMedium} {
      flex-direction: column;
      gap: 10px;

      h3 {
        display: flex;
        flex-direction: column;
        align-items: center;
      }
    }
  `}
`;
