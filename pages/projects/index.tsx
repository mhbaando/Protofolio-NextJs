import React from 'react';
import Image from 'next/image';
import { NextPage } from 'next';
import axios from 'axios';
import { IProject } from '../../interfaces/Iproject';

const Projects: NextPage = ({ data }: any) => {
  return <div></div>;
};

export default Projects;

export const getStaticProps = async () => {
  const res = await fetch('http://localhost:1337/api/projects');
  const { data } = await res.json();
  return {
    props: {
      data,
    },
  };
};
