import React from 'react';
import Head from 'next/head';
import Image from 'next/image';
import { NextPage } from 'next';
import { IProject } from '../../interfaces/Iproject';
import {
  Navigation,
  LastProjetcs,
  Footer,
  CallToAction,
} from '../../components/index';

const Projects: NextPage = ({ data }: any) => {
  return (
    <>
      <Head>
        <title>Mohamud | Projects</title>
        <meta
          name="keyword"
          content="mhbaando,mohamud,baando,fron-end,developer,webflow developer,"
        />
        <meta
          name="description"
          content="I am a professional front-end developer with almost two years of experience in developing websites using various technologies here you can see my projects where i did with several clients."
        />
        <meta name="author" content="Mohamud Abshir @mhbaando" />
        <meta property="og:title" content="Mohamud | Projects" />
        <meta property="og:site_name" content="mhbaando" />
        <meta property="og:url" content="https://mhbaando.com/projects" />
        <meta
          property="og:description"
          content="I am a professional front-end developer with almost two years of experience in developing websites using various technologies here you can see my projects where i did with several clients."
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
      <div className="bg-dark">
        <Navigation />
        <LastProjetcs props={data} limit={false} subheading="LATEST WORK" />
        <CallToAction />
        <Footer />
      </div>
    </>
  );
};

export default Projects;

export const getServerSideProps = async () => {
  // projects
  const res = await fetch(
    'https://mhbaando.herokuapp.com/api/projects?populate=*'
  );
  const { data } = await res.json();

  return {
    props: {
      data,
    },
  };
};
