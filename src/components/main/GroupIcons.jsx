import React from 'react';
import {
  AnimatedImage,
  AnimatedImageDown,
  AnimatedImageTwo,
  HorizontalIcon,
  IconsWrapper,
  VerticalIcon,
} from './mainStyled';

const GroupIcons = () => {
  return (
    <IconsWrapper>
      <VerticalIcon>
        <AnimatedImage src='/img/Line_Vertical_1.svg' alt='line1' />
        <AnimatedImage src='/img/Line_Vertical_2.svg' alt='line2' />
        <AnimatedImageDown src='/img/Line_Vertical_3.svg' alt='line3' />
      </VerticalIcon>
      <HorizontalIcon>
        <AnimatedImageTwo src='/img/Line_Vertical_6.svg' alt='line5' />
        <AnimatedImageTwo src='/img/Line_Vertical_5.svg' alt='line6' />
        <AnimatedImageTwo src='/img/Line_Vertical_4.svg' alt='line4' />
      </HorizontalIcon>
    </IconsWrapper>
  );
};

export default GroupIcons;
