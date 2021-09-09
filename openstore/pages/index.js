import Head from 'next/head';
import Link from 'next/link';
import Layout from '../components/Common-footer';
import Header from '../components/Header';
import Button from '@material-ui/core/Button';

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
        <Button variant="contained" color="primary">
          Test
        </Button>
      </Layout>
    </>
  );
}
