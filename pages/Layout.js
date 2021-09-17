import Head from 'next/head';

export default function Layout({ children }) {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/* children===index.js */}
      <div>{children}</div>
    </>
  );
}
