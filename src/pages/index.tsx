import { useEffect } from 'react';
import Head from 'next/head';
import Router from 'next/router';

// the redirect will only happen on the client-side. This is by design,
const IndexPage: React.FC<{}> = () => {
  useEffect(() => {
    Router.replace('/[type]', '/grocery');
  });
  return (
    <Head>
      <meta name="robots" content="noindex, nofollow" />
      <link rel="preconnect" href="https://fonts.gstatic.com"/>
      <link href="https://fonts.googleapis.com/css2?family=Cairo:wght@300&display=swap" rel="stylesheet"/>
      <script
            src="https://code.jquery.com/jquery-3.6.0.min.js"
            integrity="sha256-/xUj+3OJU5yExlq6GSYGSHk7tPXikynS7ogEvDej/m4="></script>
    </Head>
  );
};

export default IndexPage;
