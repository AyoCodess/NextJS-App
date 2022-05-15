import '../styles/globals.css';
import Header from './components/header';

function MyApp({ Component, pageProps }) {
  // -  individual page layouts
  if (Component.getLayout) {
    return Component.getLayout(<Component {...pageProps} />);
  }
  return (
    <>
      <Header />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
