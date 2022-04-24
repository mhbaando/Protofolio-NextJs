import React from 'react';

interface Title {
  subheading: string;
}

const SubHeading: React.FC<Title> = ({ subheading }) => {
  return (
    <div className="mh__subheading">
      <div className="horizentalLine"></div>
      <p className="subheading">{subheading}</p>
    </div>
  );
};

export default SubHeading;
