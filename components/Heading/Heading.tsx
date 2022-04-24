import React from 'react';

interface Title {
  heading: string;
}
/**
 * this component accepts a string where there are multple string or single string
 * we spliet the string if it contains the space to color them differnet color
 * else we substing the string by it's length divided by two to have symetrical color balanced string on the front end,
 * if the array contaisn multple spacees we took the firsts string that belongs the first space and the rest we joing them later for one single string
 */

const Heading: React.FC<Title> = ({ heading }) => {
  let whiteHeading = '';
  let orangeHeading = ' ';

  // if it icnludes space
  if (heading.includes(' ')) {
    // take the first part
    whiteHeading = heading.split(' ')[0];

    // takt the rest of it, if it containts multple spaces and joing them to with spac to remove the comma, + sign menas concatitnae the strings with space betwen them
    const [, ...yellow] = heading.split(' ');
    orangeHeading += yellow.join(' ');
  } else {
    // if there is no space the sentence
    whiteHeading = heading.substring(0, heading.length / 2);
    orangeHeading = heading.substring(heading.length / 2);
  }

  return (
    <div className="mh__heading">
      <h1>
        {whiteHeading}
        <span>{orangeHeading}</span>
      </h1>
    </div>
  );
};

export default Heading;
