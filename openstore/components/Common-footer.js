import Head from 'next/head';

export default function Common({ children }) {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>header</div>
      <div>{children}</div>
      <div>footer</div>
    </>
  );
}
