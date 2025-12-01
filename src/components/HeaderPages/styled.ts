import styled, { css } from 'styled-components';

export const Header = styled.header<{ $transparent?: boolean }>`
  ${({ theme, $transparent }) => css`
    background: ${$transparent ? 'transparent' : theme.colors.secondary};
    color: ${theme.colors.primary};
  `}

  display: flex;
  justify-content: center;
  align-items: center;
  height: 70px;
  width: 100%;
  transition: background 0.3s ease;
  z-index: 1;
`;

export const Title = styled.h1`
  position: relative;
  z-index: 999;
  cursor: pointer;
  transition: opacity 0.6s;

  &:hover {
    opacity: 70%;
  }
`;
