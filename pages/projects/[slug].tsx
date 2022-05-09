import React from 'react';
import Head from 'next/head';
import Image from 'next/image';
import { NextPage } from 'next';
import {
  Navigation,
  Heading,
  CallToAction,
  Footer,
} from '../../components/index';
import { IProject } from '../../interfaces/Iproject';
import { motion } from 'framer-motion';

const Slug: NextPage = ({ data }: any) => {
  // get the main data like title desctiption
  const [mainData] = data.map((project: IProject) => project.attributes);
  // get the thumabnil of the project
  const thumbanil = data.map(
    (project: IProject) => project.attributes.thumbnail.data.attributes.url
  );
  // get the tech Stack of the project
  // this new arra for purpos of adding | expect the last tech
  let techarray: string[] = [];
  const [techStack] = data.map((project: IProject) =>
    project.attributes.tech_stacks.data.map((tech, index) =>
      techarray.push(tech.attributes.technology)
    )
  );

  // small image for bluring purpose
  const blurURl = data.map((project: IProject) =>
    project.attributes.screenshots.data.map(
      (screeen: any) => screeen.attributes.formats.small.url
    )
  );

  // full image
  const screenshot = data.map((project: IProject) =>
    project.attributes.screenshots.data.map(
      (screeen: any) => screeen.attributes.url
    )
  );
  return (
    <>
      <Head>
        <title>Mohamud | {mainData.title}</title>
        <meta name="keyword" content={`${techarray.map((tech) => tech)}`} />
        <meta name="description" content={`${mainData.description}`} />
        <meta name="author" content="Mohamud Abshir @mhbaando" />
        <meta property="og:title" content={`Mohamud | ${mainData.title}`} />
        <meta property="og:site_name" content="mhbaando" />
        <meta
          property="og:url"
          content={`https://mhbaando.com/projects/${mainData.slug}`}
        />
        <meta property="og:description" content={`${mainData.description}`} />
        <meta property="og:type" content="website" />
        <meta property="og:image" content={`${thumbanil}`} />

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
      <section
        style={{
          background: `linear-gradient(180deg, #19191B 0%, rgba(45, 48, 54, 0) 175.65%),url(${thumbanil})`,
          backgroundPosition: 'center',
          backgroundSize: 'cover',
        }}
      >
        <Navigation />
        <motion.div
          initial="hidden"
          animate="show"
          variants={{
            hidden: { scale: 0.8, opacity: 0 },
            show: {
              scale: 1,
              opacity: 1,
              transition: {
                delay: 0.4,
              },
            },
          }}
          className="mh-project-header"
        >
          <Heading heading={mainData.title} />
        </motion.div>
      </section>

      <section className="csection">
        <div className="ccontainer">
          <div className="mh__project">
            <div className="mh__project--desc">
              <p>{mainData.description}</p>
            </div>
            <div className="mh__project--details">
              <div>
                <h2>Tech : &nbsp; &nbsp; </h2>
                {techarray.map((tech, index) => {
                  // we are removice Pipe | symbol from the last element of the array
                  return (
                    <p key={index}>
                      &nbsp;&nbsp;
                      {techarray.length - 1 !== index ? `${tech} |` : tech}
                    </p>
                  );
                })}
              </div>

              <div>
                <h2>Status : </h2>
                <p>&nbsp; &nbsp;{mainData.status}</p>
              </div>

              <div>
                <h2>Published Data : </h2>
                <p>
                  &nbsp; &nbsp;{new Date(mainData.createdAt).toDateString()}
                </p>
              </div>

              <div>
                <h2>Live Url : </h2>
                <p>
                  &nbsp; &nbsp;
                  <a href={mainData.liveUrl} target="_blank" rel="noreferrer">
                    {mainData.liveUrl}
                  </a>
                </p>
              </div>
            </div>
            <div className="mh__projects--fullphoto">
              <Image
                src={`${screenshot}`}
                priority
                layout="fill"
                placeholder="blur"
                blurDataURL={`${blurURl}`}
                alt={mainData.title}
              />
            </div>
          </div>
        </div>
      </section>
      <CallToAction />
      <Footer />
    </>
  );
};

export default Slug;

// gett all static paths
export const getStaticPaths = async () => {
  const res = await fetch('https://mhbaando.herokuapp.com/api/projects');
  const { data } = await res.json();

  const paths = data.map((project: IProject) => ({
    params: { slug: project.attributes.slug },
  }));

  return {
    paths,
    fallback: false,
  };
};

/// read the slug's corrsponidg value

export const getStaticProps = async ({ params }: any) => {
  const res = await fetch(
    `https://mhbaando.herokuapp.com/api/projects?populate=*&filters[slug][$eq]=${params.slug}`
  );

  const { data } = await res.json();

  if (data.length === 0) {
    return {
      notFound: true,
    };
  } else {
    return {
      props: {
        data,
      },
    };
  }
};
