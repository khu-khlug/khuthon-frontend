import Script from "next/script";
import { Header } from "@khlug/components/Header/Header";
import { Footer } from "@khlug/components/Footer/Footer";

import "./globals.css";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <head>
        <meta
          name="viewport"
          content="width=device-width,initial-scale=1,user-scalable=no,minimum-scale=1.0,maximum-scale=1.0"
        />

        <meta name="robots" content="index,follow,noimageindex" />

        <meta name="apple-mobile-web-app-capable" content="no" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black" />
        <meta name="apple-mobile-web-app-title" content="khuthon" />

        <meta property="og:type" content="website" />
        <meta property="og:title" content="khuthon" />
        <meta
          property="og:description"
          content="경희대학교 소프트웨어 해커톤"
        />
        <meta property="og:image" content="{{url('/images/_og.jpg')}}" />
        <meta property="og:url" content="http://thon.KHLUG.org" />
        <Script src="https://khlug.org/scripts/jquery-2.1.4.min.js"></Script>

        <title>khuthon</title>
      </head>
      <body>
        <Header />
        <div id="body">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
