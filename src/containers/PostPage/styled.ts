import styled, { css } from 'styled-components';

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #0d0d0d;
`;

export const Content = styled.section`
  z-index: 999;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
  margin: 0 100px;

  .div {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
  }

  .div h2 {
    text-align: center;
    z-index: 1;
    margin: 0;
  }

  .div span {
    position: absolute;
    right: 25%;
    display: flex;
    gap: 15px;
    top: 58%;
    transform: translateY(-50%);
  }
`;

export const Title = styled.h1`
  margin-top: 350px;
  ${({ theme }) => css`
    color: ${theme.colors.primary};
  `}
`;
