import Head from 'next/head';
import Link from 'next/link';
import Header from '../../components/Header';
import Layout from '../../components/Common-footer';

export default function FirstPost() {
  return (
    <Layout>
      <Head>
        <title>First Post</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <h1>First Post</h1>
      <h2>
        <Link href="/">
          <a className="seiya">Back to home</a>
        </Link>
      </h2>
    </Layout>
  );
}
