import Head from "next/head";
import { AppProps } from "next/app";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <link rel="shortcut icon" href="/favicon.svg" />
        <title>MigueMartelo.Dev</title>
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
