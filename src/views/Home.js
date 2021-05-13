import React from 'react';
// import sections
import Hero from '../components/sections/Hero';
import FeaturesSplit from '../components/sections/FeaturesSplit';
import Donations from '../components/sections/Donations';
import Cta from '../components/sections/Cta';

const Home = () => {
  return (
    <>
      <Hero className="illustration-section-01" />
      <FeaturesSplit
        invertMobile
        topDivider
        imageFill
        className="illustration-section-02"
      />
      <Donations topDivider />
      <Cta split />
    </>
  );
};

export default Home;
