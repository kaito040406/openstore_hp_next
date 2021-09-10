import Head from 'next/head';

export default function Common({ children }) {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/* children===index.js */}
      <div>{children}</div>
      <div>footer</div>
    </>
  );
}
