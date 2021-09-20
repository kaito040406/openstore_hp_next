import Head from 'next/head';
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import Layout from '../Layout';

export default function FirstPost() {
  return (
    <Layout>
      <Head>
        <title>First Post</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <Footer />
    </Layout>
  );
}
