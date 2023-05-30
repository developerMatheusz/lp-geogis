import NextNProgress from "nextjs-progressbar";
import type { AppProps } from "next/app";
import Head from "next/head";
import { ThemeProvider } from "styled-components";
import theme from "../styles/theme";
import GlobalStyles from "../styles/global";
import SEO from "../../next-seo.config";
import { DefaultSeo } from "next-seo";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <Head>
        <title>GeoGIS Geotecnologia</title>
        <link
          rel="shortcut icon"
          href="/img/geogis/favicon.png"
          type="image/x-icon"
        />
      </Head>
      <DefaultSeo {...SEO} />
      <NextNProgress
        color="#038bbb"
        startPosition={0.3}
        stopDelayMs={200}
        height={5}
        showOnShallow={true}
      />
      <Component {...pageProps} />
      <GlobalStyles />
    </ThemeProvider>
  );
}
