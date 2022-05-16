import React from 'react';
import Image from 'next/image';
import Image1 from '../public/images/1.jpeg';

function Images() {
  return (
    <div>
      <h2>Images page</h2>
      <Image
        src={Image1}
        alt='pet'
        placeholder='blur'
        width='280'
        height={'420'}
      />
      {['1', '2', '3', '4', '5'].map((path) => {
        return (
          <div key={path}>
            <Image
              src={`/images/${path}.jpeg`}
              alt='pet'
              width='280'
              height={'420'}
              blurDataURL={Image1}
            />
          </div>
        );
      })}
    </div>
  );
}

export default Images;
