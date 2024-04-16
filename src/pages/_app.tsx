import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Head from "next/head";

export default function App({ Component, pageProps }: AppProps) {
  return <>
    <Head>
      <meta name="viewport" content="width=device-width,initial-scale=1" />
      <title>Forst Eternity</title>
      <meta name="description" content="Best PWA app in the world!" />
      <link rel="shortcut icon" href="/favico.png" type="image/x-icon" />
      <link rel="manifest" href="/manifest.json" />
    </Head>
    <Component {...pageProps} />;
  </>
}