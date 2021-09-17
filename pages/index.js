// Mainページです！！

import Head from 'next/head';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Top from '../components/Top';
import Main from '../components/MainPage/Main';
import Layout from './Layout';

// コピペ用htmlコード(div用)
// <div className=""></div>
// コピペ用htmlコード(h1用)
// <h1 className=""></h1>

export default function index() {
  return (
    <>
      <Layout>
        <Head>
          <title>Create Next App</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
        {/* headerのコードです。 */}
        <Header />
        {/* mainのtopのコードです。 */}
        <Top />
        {/* mainページのコードです。 */}
        <Main />
        {/* footerのコードです。 */}
        <Footer />
      </Layout>
    </>
  );
}
