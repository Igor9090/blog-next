import styled, { css } from 'styled-components';

export const Container = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  opacity: 0.5;
  ${({ theme }) => css`
    padding: ${theme.spacing.xxl};
    color: ${theme.colors.textMuted};
  `}
`;
