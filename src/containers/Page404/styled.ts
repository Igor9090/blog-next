import styled, { css } from 'styled-components';

export const ContainerError = styled.section`
  ${({ theme }) => css`
    background-color: ${theme.colors.background};
    color: ${theme.colors.danger};
    font-size: ${theme.fontSizes.xxl};
    font-weight: ${theme.fontWeights.black};
  `}

  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
`;
