import { theme } from '@/styles/theme';
import styled, { css } from 'styled-components';

export const Layout = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Container = styled.section`
  display: grid;
  place-items: center;
  grid-template-columns: repeat(3, minmax(280px, 1fr));
  min-height: 90vh;
  padding-top: ${({ theme }) => theme.spacing.lg};
  width: 60vw;
`;

export const Div = styled.div`
  font-size: 14px;
  transition: all 0.4s ease;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  overflow: hidden;
  border-radius: 8px;

  &:hover {
    margin: 50px;
    background: rgba(255, 255, 255, 0.17);
    z-index: 3;
  }

  img {
    border: 2px solid transparent;
  }

  img:hover {
    border: 2px solid ${({ theme }) => theme.colors.primary};
  }

  .thumb,
  .small {
    position: relative;
  }

  .thumb {
    display: block;
    z-index: 0;
  }

  .small {
    display: none;
    z-index: 3;
  }

  &:hover .small {
    display: block;
  }

  &:hover .thumb {
    display: none;
  }
`;

export const Blur = styled.div`
  display: flex;
  backdrop-filter: blur(10px);
`;

export const Data = styled.div`
  width: 280px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  span {
    display: none;
    padding: 6px 0;
    ${({ theme }) => css`
      font-size: ${theme.fontSizes.sm};
    `}
    z-index: 3;
  }

  ${Div}:hover & span {
    display: block;
  }

  .title {
    ${({ theme }) => css`
      font-size: ${theme.fontSizes.md};
      font-weight: ${theme.fontWeights.bold};
    `}
  }

  .rating {
    margin: 3px 0;
    padding: 1px 5px;
    border: 1px solid white;
    border-radius: 3px
  }
`;
