import React from 'react';
import Footer from './components/footer';
import Head from 'next/head';

function About() {
  return <h1>about</h1>;
}

export default About;

About.getLayout = function PageLayout(page) {
  return (
    <>
      <Head>
        <title>About Page</title>
        <meta name='description' content='ABOUT PAGE - next page demo app' />
      </Head>
      {page}
      <Footer />
    </>
  );
};
