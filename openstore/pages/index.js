import Link from 'next/link';
import Head from 'next/head';
import Header from '../components/Header';
import Top from '../components/Top';
import Layout from '../components/Common-footer';
import Button from '@material-ui/core/Button';

// コピペ用htmlコード(div用)
// <div className=""></div>
// コピペ用htmlコード(h1用)
// <h1 className=""></h1>

export default function Main() {
  return (
    <>
      <Layout main>
        <Head>
          <title>Create Next App</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <Header />
        <Top />
        <h1 className="title">
          Read{' '}
          <Link href="/posts/first-post">
            <a className="seiya">this page!</a>
          </Link>
        </h1>
        <Button variant="contained" color="primary" href="/posts/first-post">
          Link
        </Button>
        <Button>Link</Button>
      </Layout>
    </>
  );
}
