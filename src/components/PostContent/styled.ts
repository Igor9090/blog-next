import { theme } from '@/styles/theme';
import styled, { css } from 'styled-components';

export const Container = styled.div`
  margin-top: 60px;
  margin-bottom: 40px;
  padding: 20px;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
  width: 50vw;
  display: flex;

  h1 {
    ${({ theme }) => css`
      color: ${theme.colors.primary};
      font-size: ${theme.fontSizes.xxl};
      margin-bottom: 10px;
    `}
    text-align: center;
  }

  h2 {
    ${({ theme }) => css`
      color: ${theme.colors.primary};
      font-size: ${theme.fontSizes.xl};
      margin-bottom: 10px;
    `}
  }

  p {
    ${({ theme }) => css`
      font-size: ${theme.fontSizes.md};
      line-height: 1.6;
      color: ${theme.colors.text};
    `}
    margin: 15px 0;

    strong {
      ${({ theme }) => css`
        color: ${theme.colors.textMuted};
        font-size: ${theme.fontSizes.md};
      `}
    }

    em {
      font-style: italic;
      color: ${({ theme }) => theme.colors.textMuted};
    }
  }

  ul {
    margin-left: 20px;
    margin-bottom: 15px;

    li {
      margin-bottom: 8px;

      strong {
        color: ${({ theme }) => theme.colors.textMuted};
      }
    }
  }

  .infoBlock {
    text-align: justify;
  }

  .dataBlock {
    margin-left: 50px;
    padding: 15px;
    background-color: ${({ theme }) => theme.colors.secondary};
    height: 300px;
  }
`;
