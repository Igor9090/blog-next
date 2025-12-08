import styled, { css } from 'styled-components';

export const Container = styled.section`
  margin: 20px 0;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const Info = styled.span`
  ${({ theme }) => css`
    color: ${theme.colors.textMuted};
  `}
  font-style: italic;
`;

export const InfoCast = styled.div`
  font-size: ${({ theme }) => theme.fontSizes.sm};
  margin: 20px 0;
  line-height: 1.5;
  span {
    ${({ theme }) => css`
      color: ${theme.colors.textMuted};
      font-weight: ${theme.fontWeights.bold};
      font-size: ${theme.fontSizes.md};
    `}
  }

  .metadata-item {
    margin: 5px 0;
  }

  .link {
    font-style: italic;
  }
`;
