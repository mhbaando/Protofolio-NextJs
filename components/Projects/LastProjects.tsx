import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { Heading, SubHeading } from '../index';
import { IProject } from '../../interfaces/Iproject';

const LastProjetcs: React.FC = ({ props, limit }: any) => {
  let imageURI = '';
  const data: IProject[] = props;
  const [selected, setIsSelected] = useState(0);

  const techies = [
    'All',
    'React',
    'Next js',
    'Node js',
    'Wordpress',
    'Webflow',
  ];
  const filteredDataBasedOnTechSelected = filteredData(data, selected, techies);

  // processing images in here
  // get the last 7 elements from the projetcs array
  const lastProj = filteredDataBasedOnTechSelected
    .slice(limit ? 0 : undefined, limit ? 7 : undefined)
    .map((project) => {
      imageURI = project.attributes.thumbnail.data?.attributes?.url;
      return (
        <Link
          href={`/projects/${project.attributes.slug}`}
          passHref
          key={project.id}
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            whileInView={{
              scale: [project.id % 2 === 0 ? '0.92' : '0.89', '1'],
            }}
            transition={{ duration: 0.5, easings: 'easeInOut' }}
            className="mh__last-projetcs-porject"
            key={project.id}
          >
            {imageURI && (
              <Image src={imageURI} layout="fill" objectFit="cover" />
            )}
            <h2>{project.attributes.title}</h2>
          </motion.div>
        </Link>
      );
    });

  return (
    <section className="csection">
      <div className="ccontainer">
        <div className="mh__projetcs-title">
          <div>
            <SubHeading subheading="MY RECENT WORK" />
            <Heading heading="Projects" />
          </div>

          <div className="mh__projetcs-filter">
            {techies.map((tech, index) => {
              return (
                <button
                  className={`${index === selected && 'filter-active'}`}
                  key={index}
                  onClick={() => {
                    setIsSelected(index);
                  }}
                >
                  {tech}
                </button>
              );
            })}
          </div>
        </div>
        <div className="mh__last-projetcs">{lastProj}</div>
      </div>
    </section>
  );
};

export default LastProjetcs;

// function acceps
// 1- the overall data the array
// 2- acceps the index of the selected button the filter buttons
// 3- the array o all techs availble

export const filteredData = (
  data: IProject[],
  selectedIndex: number,
  techiesArray: string[]
) => {
  // find what the user is selected
  const selectValueFromTheArray: string = techiesArray[selectedIndex];

  // find it inside the array that we passed the fn
  const filteredArray = data.filter(
    (Projects: IProject) =>
      Projects.attributes.tech_stacks.data
        .map((techies) => techies.attributes.technology)
        // check if the array of techs includes the selectvalue from the array
        .includes(selectValueFromTheArray) ||
      // if the user selects ALL we wanna return all the data
      (selectValueFromTheArray === 'All' && Projects)
  );

  // finaly retunr the filteredarray
  return filteredArray;
};
