import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

// this compomnent holds us the logo
const Brand: React.FC = () => {
  return (
    <div className='mh__nav--brand'>
      <Link href='/'>
        <a>
          <Image src='/assets/logo.svg' width={145} height={22} />
        </a>
      </Link>
    </div>
  );
};

export default Brand;
