import styled, { css } from 'styled-components';

export const Container = styled.div`
  ${({ theme }) => css`
    background-color: ${theme.colors.fourthColor};
    width: 100%;
    padding: 20px;
    border-radius: 20px;
    box-shadow: 0 0 2em lightgray;
    color: gray;

    tr {
      display: flex;
      align-items: center;
      gap: 5px;
    }

    td {
      text-align: center;
      width: 100px;
    }

    .options {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      width: 50px;

      button {
        background-color: transparent;
        border: none;
        font-size: 20px;
        cursor: pointer;
        color: green;
      }

      a {
        background-color: transparent;
        border: none;
        font-size: 20px;
        cursor: pointer;
        color: green;
      }

      .delete-button {
        color: red;
        
      }
    }
  `}
`;
