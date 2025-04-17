import { Header } from "@khlug/components/Header/Header";
import { Footer } from "@khlug/components/Footer";
import { Flip, ToastContainer } from "react-toastify";

import "./globals.css";
import "react-toastify/dist/ReactToastify.css";

type Props = Readonly<{
  children: React.ReactNode;
}>;

export default function RootLayout({ children }: Props) {
  return (
    <html lang="ko">
      <head>
        <meta
          name="viewport"
          content="width=device-width,initial-scale=1,user-scalable=no,minimum-scale=1.0,maximum-scale=1.0"
        />
        <title>khuthon</title>
        <meta name="description" content="경희대학교 소프트웨어 해커톤" />

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
        <meta
          property="og:image"
          content="https://cdn.khlug.org/images/_og.jpg"
        />
        <meta property="og:url" content="http://thon.khlug.org" />
        <meta property="twitter:title" content="khuthon" />
        <meta
          property="twitter:description"
          content="경희대학교 소프트웨어 해커톤"
        />
        <meta property="twitter:card" content="summary" />
        <meta
          property="twitter:image"
          content="https://cdn.khlug.org/images/_og.jpg"
        />
      </head>
      <body className="m-0 p-0 b-0">
        <Header />
        <div id="body">{children}</div>
        <Footer />
        <ToastContainer
          position="top-right"
          autoClose={2000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
          transition={Flip}
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
            (function(){var w=window;if(w.ChannelIO){return w.console.error("ChannelIO script included twice.");}var ch=function(){ch.c(arguments);};ch.q=[];ch.c=function(args){ch.q.push(args);};w.ChannelIO=ch;function l(){if(w.ChannelIOInitialized){return;}w.ChannelIOInitialized=true;var s=document.createElement("script");s.type="text/javascript";s.async=true;s.src="https://cdn.channel.io/plugin/ch-plugin-web.js";var x=document.getElementsByTagName("script")[0];if(x.parentNode){x.parentNode.insertBefore(s,x);}}if(document.readyState==="complete"){l();}else{w.addEventListener("DOMContentLoaded",l);w.addEventListener("load",l);}})();
            ChannelIO('boot', {
              "pluginKey": "be159df3-fbbc-4c1e-a2f3-8ccaa7bf1b7b"
            });`,
          }}
        />
      </body>
    </html>
  );
}
