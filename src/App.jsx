import { useState } from 'react';
import './App.css';
import { useAnimate } from 'framer-motion';

import RoundedIconButton from './components/ui/RoundedIconButton';
import MainProductName from './components/MainProductName';
import Header from './components/ui/Header';
import ProductDescription from './components/ProductDescription';
import EnterExitAnimation from './components/Animation/EnterExitAnimation';
import Backgrounds from './components/Backgrounds';

import { DATA } from './constants/data';
import ProductImage from './components/ProductImage';

const productDescriptionVariants = {
  initial: direction => {
    return {
      y: direction > 0 ? -50 : 50,
      opacity: 0,
    };
  },
  enter: {
    y: 0,
    opacity: 1,
    transition: {
      type: 'spring',
    },
  },
  exit: direction => {
    return {
      y: direction < 0 ? -50 : 50,
      opacity: 0,
    };
  },
};

const productImageVariants = {
  initial: direction => {
    return {
      scale: direction < 0 ? 0 : 1,
      rotate: 0,
      x: direction < 0 ? 0 : '-100vw',
    };
  },
  enter: {
    scale: 1,
    rotate: -40,
    x: 0,
    transition: {
      type: 'spring',
      stiffness: 100,
      damping: 15,
    },
  },
  exit: direction => {
    return {
      x: direction < 0 ? '-100vw' : '0',
      rotate: 0,
      scale: direction < 0 ? 0.2 : 0,
      transition: {
        duration: 0.3,
      },
    };
  },
};

function App() {
  const [backgroundScope, backgroundAnimate] = useAnimate();
  const [activeIndex, setActiveIndex] = useState(0);
  const [slideDirection, setSlideDirection] = useState(1);

  const leftIconPressHandle = () => {
    const newActiveIndex = activeIndex + 1;

    //check if it exceeds the input Range
    if (newActiveIndex >= DATA.length) return;

    //slide the background
    backgroundAnimate(
      backgroundScope.current,
      { x: `${newActiveIndex * -100}vw` },
      { duration: 1.8, type: 'spring' }
    );

    setActiveIndex(newActiveIndex);
    setSlideDirection(-1);
  };

  const rightIconPressHandle = () => {
    const newActiveIndex = activeIndex - 1;

    //check if it exceeds the input Range
    if (newActiveIndex < 0) return;

    //slide the backgrounds
    backgroundAnimate(
      backgroundScope.current,
      { x: `${newActiveIndex * -100}vw` },
      { duration: 1.8, type: 'spring' }
    );

    setActiveIndex(newActiveIndex);
    setSlideDirection(1);
  };

  return (
    <div className="container">
      <Header />
      <EnterExitAnimation
        activeIndex={activeIndex}
        direction={slideDirection}
        variants={productDescriptionVariants}
        className={'description'}
      >
        <ProductDescription
          name={DATA[activeIndex].name}
          description={DATA[activeIndex].description}
        />
      </EnterExitAnimation>

      <div className="image_container">
        <EnterExitAnimation
          className={'imageBox'}
          variants={productImageVariants}
          direction={slideDirection}
          activeIndex={activeIndex}
        >
          <ProductImage imageSrc={DATA[activeIndex].image} />
        </EnterExitAnimation>
      </div>

      <div className="leftArrowButton">
        <RoundedIconButton
          onPress={leftIconPressHandle}
          iconName={'chevron-back-outline'}
        />
      </div>

      <div className="rightArrowButton">
        <RoundedIconButton
          onPress={rightIconPressHandle}
          iconName={'chevron-forward-outline'}
        />
      </div>

      <Backgrounds
        backgrounds={DATA.map(product => product.bg)}
        backgroundAnimationScope={backgroundScope}
      />

      <MainProductName />
    </div>
  );
}

export default App;
