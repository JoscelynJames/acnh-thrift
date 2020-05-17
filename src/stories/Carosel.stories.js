import React from 'react';
import Carousel from '../components/molecules/Carousel.tsx';
import '../../node_modules/@elastic/eui/dist/eui_theme_light.min.css';

import firstImage from '../assets/images/testImage.jpeg';
import secondImage from '../assets/images/testImage2.jpeg';
import thirdImage from '../assets/images/testImage3.jpeg';

export default {
  title: 'Carousel',
  component: Carousel,
};

export const Default = () => <Carousel />;


const styles = {
  height: '100%',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
};

export const WithChildren = () => (
  <Carousel>
    <div style={styles}>
      <img alt="missing" src={firstImage} />
    </div>
    <div style={styles}>
      <img alt="missing" src={secondImage} />
    </div>
    <div style={styles}>
      <img alt="missing" src={thirdImage} />
    </div>
  </Carousel>
);
