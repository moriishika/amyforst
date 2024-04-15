import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
    <Head>
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <link rel="shortcut icon" href="/favicon.ico" />
        <link rel="manifest" href="/manifest.json" />
        <link rel="icon" type="image/png" sizes="32x32" href="/icons/ios/32.png" />
          <link rel="icon" type="image/png" sizes="16x16" href="/icons/ios/64.png" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
