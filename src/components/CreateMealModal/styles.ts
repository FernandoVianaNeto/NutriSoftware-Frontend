import styled, { css } from 'styled-components';

export const Container = styled.div`
  ${() => css`
    position: fixed;
    top: 0px;
    left: 0px;
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 200;
    width: 100%;
    height: 100%;
  `}
`;

export const SectionContent = styled.div`
  ${({ theme }: any) => css`
    padding: 50px 50px 0px 50px;

    h1 {
      background-color: ${theme.colors.fourthColor};
      padding: 20px 20px;
      border-radius: 20px;
      color: ${theme.colors.fifthColor};
    }

    @media ${theme.media.lteMedium} {
      max-width: 100vw;
      padding: 50px 0px;
    }
  `}
`;

// CreateMealComponents

export const FormContainer = styled.div`
  ${({ theme }) => css`
    background-color: ${theme.colors.fourthColor};
    width: 500px;
    margin: 100px auto;
    padding: 100px;
    border-radius: 20px;

    h1 {
      color: ${theme.colors.fifthColor};
    }

    @media ${theme.media.lteMedium} {
      max-width: 100vw;
      padding: 50px 0px;
      flex-direction: column;
    }
  `}
`;

export const BigGroup = styled.div`
  ${({ theme }: any) => css`
    display: flex;
    justify-content: space-around;
    gap: 30px;

    @media ${theme.media.lteMedium} {
      flex-direction: column;
    }
  `}
`;

export const Group = styled.div`
  ${() => css`
    display: flex;
    flex-direction: column;
  `}
`;

export const ButtonContainer = styled.div`
  ${() => css`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    margin-top: 20px;
  `}
`;
