import React from 'react';
import Hero from '@/components/Hero';
import InfoBoxes from '@/components/InfoBoxes';

const HomePage = () => {
  console.log(process.env.MONGODB_URI);

  return (
    <>
      <Hero />
      <InfoBoxes />
    </>
  )
}

export default HomePage