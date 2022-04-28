import type { NextPage } from 'next';
import Head from 'next/head';
import {
  Navigation,
  HeroSection,
  About,
  LastProjetcs,
} from '../components/index';

const Home: NextPage = ({ data }: any) => {
  return (
    <>
      <Head>
        <title>Mohamud | Your WebApp Developer</title>
        <meta
          name="description"
          content="I am a professional front-end developer with almost two years of experience in developing websites using various technologies including HTML, CSS, SCSS, JavaScript, Reactjs, Netxjs, Angular, Webflow & WordPress, also i am UI/UX Designer, with a background in 2D Animations and Videography."
        />
        <meta
          name="keyword"
          content="mhbaando,mohamud,baando,fron-end,developer,webflow developer,"
        />
        <meta name="author" content="Mohamud Abshir @mhbaando" />
        <meta property="og:title" content="Mohamud | Your WebApp Developer" />
        <meta property="og:site_name" content="mhbaando" />
        <meta property="og:url" content="https://mhbaando.com" />
        <meta
          property="og:description"
          content="I am a professional front-end developer with almost two years of experience in developing websites using various technologies..."
        />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://mhbaando.com/ogimage.png" />

        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/assets/favicons/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/assets/favicons/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/assets/favicons/favicon-16x16.png"
        />
        <link rel="manifest" href="/assets/favicons/site.webmanifest"></link>
        <link rel="icon" href="/assets/favicons/favicon.ico" />
      </Head>

      <header className="dark">
        <Navigation />
        <HeroSection />
      </header>
      <About />
      <LastProjetcs props={data} />
    </>
  );
};

export default Home;

export const getServerSideProps = async () => {
  const res = await fetch('http://localhost:1337/api/projects?populate=*');
  const { data } = await res.json();
  return {
    props: {
      data,
    },
  };
};
