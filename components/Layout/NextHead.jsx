import Head from "next/head";

const NextHead = ({ title }) => {
  return (
    <Head>
      <title>{title}</title>
      <link rel="shortcut icon" href="favicon.png" type="image/x-icon" />
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.2/css/all.min.css"
        integrity="sha512-HK5fgLBL+xu6dm/Ii3z4xhlSUyZgTT9tuc/hSrtw6uzJOvgRr2a9jyxxT1ely+B+xFAmJKVSTbpM/CuL7qxO8w=="
        crossOrigin="anonymous"
      />
    </Head>
  );
};

export default NextHead;
