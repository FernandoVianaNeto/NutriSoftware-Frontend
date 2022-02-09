import styled, { css } from 'styled-components';

export const Container = styled.div`
  ${() => css`

  `}
`;

export const SectionContent = styled.div`
  ${({ theme }) => css`
    padding: 50px;

    h1 {
      background-color: ${theme.colors.fourthColor};
      padding: 20px 20px;
      border-radius: 20px;
      color: ${theme.colors.fifthColor};
    }
  `}
`;

// Componentes

export const MealsContainer = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;
    padding: 50px;
    background-color:  ${theme.colors.fourthColor};
    border-radius: 20px;
    min-height: 270px;
  `}
`;

export const Filters = styled.div`
  ${({ theme }) => css`
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
  ${({ theme }) => css`
    border-radius: 20px;
    background-color: ${theme.colors.fourthColor};
    width: 100%;
    padding: 20px 50px;

    button {
      background: transparent;
      border: none;
      cursor: pointer;
    }

    table {
      width: 100%;
    }

    td {
      text-align: center;
      width: 100px;
    }

    .options {
      margin-left: 0px;
      width: 50px;

      cursor: default;
    }

    tr {
    }
  `}
`;

export const Group = styled.div`
  ${() => css`
    display: flex;
    align-items: center;
    gap: 10px;
  `}
`;
