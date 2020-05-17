import React, { CSSProperties, useState } from 'react';
import Bubble from '../atoms/Bubble'
import Arrow from '../atoms/Arrow'
import './Carousel.css';

const rightArrow: CSSProperties = {
  position: 'absolute',
  bottom: '30%',
  right: '15%'
};

const leftArrow: CSSProperties = {
  transform: 'rotate(180deg)',
  position: 'absolute',
  bottom: '30%',
  left: '15%',
};

const carouselContainer: CSSProperties = {
  position: 'relative'
};

export default (props: {children: [any?]} = { children: [] }) => {
  const [ currentIndex, setCurrentIndex ] = useState(0);
  const [ incomingIndex, setIncomingIndex ] = useState(1);
  const currentCarouselContent = document.getElementById('currentCarouselContent');
  const incomingCarouselContent = document.getElementById('incomingCarouselContent');
  const totalChildren = props.children.length
  
  const handleLeftArrowClick = () => {
    currentIndex === 0
      ? setIncomingIndex(totalChildren - 1)
      : setIncomingIndex(currentIndex - 1)

    currentCarouselContent?.classList.add('slideOutLeftStart', 'transitionPath')
    incomingCarouselContent?.classList.add('slideInLeftStart', 'transitionPath')
    
    setTimeout(() => {
      incomingCarouselContent?.classList.add('show', 'slideInLeft')
      currentCarouselContent?.classList.add('hide', 'slideOutLeft')
    }, 100)
    
    // reset the classes on both when the animation completes
    setTimeout(() => {
      currentCarouselContent?.setAttribute('class', 'contentContainer')
      incomingCarouselContent?.setAttribute('class', 'contentContainer hide')

      if (currentIndex === 0) return setCurrentIndex(totalChildren - 1);
      setCurrentIndex(currentIndex - 1);
    }, 400)
  };

  const handleRightArrowClick = () => {
    currentIndex + 1 === totalChildren
    ? setIncomingIndex(0)
    : setIncomingIndex(currentIndex + 1)

    currentCarouselContent?.classList.add('slideOutStart', 'transitionPath', 'hide')
    incomingCarouselContent?.classList.add('show', 'slideInStart', 'transitionPath')
    
    setTimeout(() => {
      currentCarouselContent?.classList.add('hide', 'slideOut')
      incomingCarouselContent?.classList.add('show', 'slideIn')
    }, 100)
    
    // reset the classes on both when the animation completes
    setTimeout(() => {
      currentCarouselContent?.setAttribute('class', 'contentContainer')
      incomingCarouselContent?.setAttribute('class', 'contentContainer hide')

      if (currentIndex === props.children.length - 1) return setCurrentIndex(0);
      setCurrentIndex(currentIndex + 1);
    }, 400)
  };

  return (
    <main style={carouselContainer}>
      <button style={leftArrow} type="button" onClick={() => handleLeftArrowClick()} >
        <Arrow />
      </button>
        <Bubble />
        <section id="currentCarouselContent" className="contentContainer">
          {props.children[currentIndex]}
        </section>
        <section id="incomingCarouselContent" className="contentContainer hide">
          {totalChildren > 0 ? props.children[incomingIndex] : ''}
        </section>
      <button style={rightArrow} type="button" onClick={() => handleRightArrowClick()}>
        <Arrow />
      </button>
    </main>
  );
};

