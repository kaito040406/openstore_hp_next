import Link from 'next/link';
import Head from 'next/head';
import Header from '../components/Header';
import Layout from '../components/Common-footer';

export default function Main() {
  return (
    <>
      <Layout main>
        <Head>
          <title>Create Next App</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <Header />
        <h1 className="title">
          Read{' '}
          <Link href="/posts/first-post">
            <a className="seiya">this page!</a>
          </Link>
        </h1>
      </Layout>
    </>
  );
}
