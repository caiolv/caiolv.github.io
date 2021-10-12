import React from 'react';
import Fade from 'react-reveal/Fade';

const Warning = () => {
  return (
    <section id="warning" className="fixed-top">
      <Fade top duration={500} delay={600} distance="30px">
        <h1>under construction</h1>
      </Fade>
    </section>
  );
};

export default Warning;
