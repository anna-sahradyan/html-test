import { keyframes } from 'styled-components';

export const moveLeftMobile = keyframes`
 0% {
  transform: translateX(0);
 }
 50% {
  transform: translateX(-50px);
 }
 100% {
  transform: translateX(0);
 }
`;

export const moveRightMobile = keyframes`
 0% {
  transform: translateX(0);
 }
 50% {
  transform: translateX(50px);
 }
 100% {
  transform: translateX(0);
 }
`;

export const moveUp = keyframes`
    0% {
        transform: translateY(0);
    }
    50% {
        transform: translateY(-50px);
    }
    100% {
        transform: translateY(0);
    }

`;

export const moveDown = keyframes`
    0% {
        transform: translateY(0);
    }
    50% {
        transform: translateY(50px);
    }
    100% {
        transform: translateY(0);
    }
`;
