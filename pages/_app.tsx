import '../styles/globals.css'
import type { AppProps } from 'next/app'
import NextNProgress from "nextjs-progressbar";


function MyApp({ Component, pageProps }: AppProps) {
   return (
     <>
       <NextNProgress stopDelayMs={200} />
       <Component {...pageProps} />;
     </>
   );
}

export default MyApp
