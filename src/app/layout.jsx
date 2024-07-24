import { Space_Grotesk, Instrument_Serif, Libre_Barcode_39, Comic_Neue } from 'next/font/google';
import "./globals.css";
import Header from "./components/layout/Header";
import { ViewTransitions } from "next-view-transitions";
import Providers from "./providers";
import SmoothScroll from './components/SmoothScroll';
import Head from 'next/head'; // Importation du composant Head

const grotesk = Space_Grotesk({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-bowlby',
  display: 'swap',
});

const hitman = Libre_Barcode_39({
  subsets: ['latin'],
  weight: '400',
  variable: '--font-hitman',
  display: 'swap',
});

const comic = Comic_Neue({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-comic',
  display: 'swap',
});

const flower = Instrument_Serif({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-flower',
  display: 'swap',
});

export const metadata = {
  title: "Louis Maucourt",
  description: "Développeur FrontEnd, Portfolio Louis Maucourt",
};

export default function RootLayout({ children }) {
  return (
    <ViewTransitions>
      <html lang="fr">
        <Head>
          <link rel="icon" href="/favicon.ico" />
          <title>{metadata.title}</title>
          <meta name="description" content={metadata.description} />
        </Head>
        <body className={`${grotesk.variable} ${hitman.variable} ${flower.variable} ${comic.variable} font-sans scrollbar-thin scrollbar-thumb-black scrollbar-track-slate-50`} suppressHydrationWarning>
          <Providers>
            <SmoothScroll />
            <Header />
            <main>{children}</main>
          </Providers>
        </body>
      </html>
    </ViewTransitions>
  );
}
