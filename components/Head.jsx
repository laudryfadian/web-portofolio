import Head from 'next/head';

const CustomHead = ({ title }) => {
  return (
    <Head>
      <title>{title}</title>
      <meta
        name="description"
        content="Laudry Iza Fadian is an avid software engineer building websites and applications you'd love to use"
      />
      <meta
        name="keywords"
        content="Laudry Iza Fadian, laudry, ranganath, web developer portfolio, laudry web developer, laudry developer, Laudry Iza Fadian portfolio, vscode-portfolio"
      />
      <meta property="og:title" content="Laudry Iza Fadian's Portfolio" />
      <meta
        property="og:description"
        content="A full-stack developer building websites that you'd like to use."
      />
      <meta property="og:image" content="https://imgur.com/4zi5KkQ.png" />
      <meta property="og:url" content="https://vscode-portfolio.vercel.app" />
      <meta name="twitter:card" content="summary_large_image" />
    </Head>
  );
};

export default CustomHead;

CustomHead.defaultProps = {
  title: 'Laudry Iza Fadian',
};
