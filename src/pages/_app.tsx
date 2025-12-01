import { AppProps } from 'next/app';
import { ThemeProvider } from 'styled-components';
import { Globalstyled } from '@/styles/global-styled';
import { theme } from '@/styles/theme';
import HeaderPages from '@/components/HeaderPages';
import Footer from '@/components/Footer';

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <Globalstyled />
      <HeaderPages />
      <Component {...pageProps} />
      <Footer />
    </ThemeProvider>
  );
}
