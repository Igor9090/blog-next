// global-styled.ts
import { Noto_Sans } from 'next/font/google';
import { createGlobalStyle, css } from 'styled-components';

export const notaSans = Noto_Sans({
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  subsets: ['latin'],
});

export const Globalstyled = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: ${notaSans.style.fontFamily};
    ${({ theme }) => css`
      background-color: ${theme.colors.background};
      color: ${theme.colors.text};
    `}

  }

  a {
    text-decoration: none;
    color: inherit;
  }
`;
