import type { AppProps } from "next/app";
import { ThemeProvider } from "styled-components";
import theme from "@/styles/theme";
import GlobalStyles from "@/styles/global";
import Head from "next/head";

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <ThemeProvider theme={theme}>
      <Head>
        <title>GeoGIS Geotecnologia LTDA</title>
        <link rel="shortcut icon" href="/img/logo.ico" type="image/x-icon" />
      </Head>
      <Component {...pageProps} />
      <GlobalStyles />
    </ThemeProvider>
  );
};

export default App;
