import '../styles/globals.css';
import './components/Navbar.css';
import Header from './components/header';
import Head from 'next/head';
import Navbar from './components/Navbar';
import { SessionProvider, session } from 'next-auth/react';

function MyApp({ Component, pageProps }) {
  // -  individual page layouts
  if (Component.getLayout) {
    return Component.getLayout(
      <SessionProvider session={session}>
        <Component {...pageProps} />
      </SessionProvider>
    );
  }
  return (
    <>
      <SessionProvider session={session}>
        <Navbar />
        <Header />

        <Component {...pageProps} />
      </SessionProvider>
    </>
  );
}

export default MyApp;
