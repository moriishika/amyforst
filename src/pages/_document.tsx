import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
    <Head>
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <title>My awesome PWA app</title>
        <meta name="description" content="Best PWA app in the world!" />
        <link rel="shortcut icon" href="/favicon.ico" />
        <link rel="manifest" href="/manifest.json" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="My awesome PWA app" />
        <meta property="og:description" content="Best PWA app in the world!" />
        <meta property="og:site_name" content="Forst Eternity" />
        <meta property="og:url" content="https://amyforst.vercel.app" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
