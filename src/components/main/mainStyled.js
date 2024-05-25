import styled from 'styled-components';
import {
  CommonBgDarkColorBg,
  CommonBgLightColor,
  FontStyle,
} from '../../commonStyle';
import { moveDown, moveLeftMobile, moveRightMobile, moveUp } from './animation';

export const Container = styled.div`
  width: 1640px;
  margin: 0 auto;
  min-height: 100dvh;
  overflow: hidden;
  @media (max-width: 320px) {
    width: 100%;
  }
`;
export const Content = styled.div`
  width: 1640px;
  margin: 0 auto;
  @media (max-width: 320px) {
    width: 100%;
  }
`;

export const MainWrapper = styled.div`
  display: flex;
  color: white;
  @media (max-width: 320px) {
    justify-content: center;
    flex-direction: column;
    min-height: 100dvh;
  }
`;
export const BannerContainer = styled.div`
  flex: 4.7;
  @media (max-width: 320px) {
    width: 100%;
    justify-content: center;
    align-items: center;
  }
`;
export const GroupIconsContainer = styled.div`
  flex: 2.8;
`;
export const BlogContainer = styled.div`
  flex: 4.5;
  @media (max-width: 320px) {
    width: 100%;
  }
`;

/*Banner component*/
export const BannerWrapper = styled.div`
  margin-top: 232px;
  @media (max-width: 320px) {
    margin: ${props =>
      props.close ? '575px auto auto auto' : '70px  auto auto auto'};
    width: 300px;
    min-height: 241px;
  }
`;
export const Title = styled.h1`
  width: 100%;
  font-size: 96px;
  font-weight: 500;
  line-height: 96px;
  letter-spacing: 0;
  text-align: left;
  @media (max-width: 320px) {
    width: 300px;
    text-align: center;
    font-size: 46px;
    font-weight: 500;
    line-height: 50px;
    letter-spacing: 0;
  }
`;
export const BannerBtn = styled.button`
  margin-top: 48px;
  text-transform: uppercase;
  font-size: 24px;
  font-weight: 600;
  line-height: 32px;
  letter-spacing: 0;
  text-align: center;
  border-radius: 48px;
  cursor: pointer;
  ${CommonBgLightColor};
  color: white;
  padding: 20px 72px 20px 72px;
  @media (max-width: 320px) {
    width: 300px;
    text-align: center;
    font-size: 18px;
    font-weight: 500;
    line-height: 26px;
    padding: 15px 20px 15px 20px;
  }
`;
export const Text = styled.p`
  margin-top: 24px;
  color: rgba(255, 255, 255, 0.6);
  font-size: 32px;
  font-weight: 500;
  line-height: 32px;
  letter-spacing: 0;
  text-align: left;
  @media (max-width: 320px) {
    width: 100%;
    text-align: center;
    font-size: 20px;
    font-weight: 500;
    line-height: 26px;
  }
`;
export const Span = styled.span`
  color: #478bf9;
`;
/*middle part*/
export const IconsWrapper = styled.div`
  margin-left: 42px;
  @media (max-width: 320px) {
    margin: 32px auto auto auto;
  }
`;
export const VerticalIcon = styled.div`
  display: block;
  @media (max-width: 320px) {
    display: none;
  }
`;
export const HorizontalIcon = styled.div`
  display: none;
  @media (max-width: 320px) {
    justify-content: center;
    display: block;
    width: 310px;
  }
`;
export const AnimatedImage = styled.img`
  margin-right: 16px;
  animation: ${moveUp} 5s linear infinite alternate;
  &:nth-child(2) {
    animation-delay: 2s;
  }
`;
export const AnimatedImageTwo = styled.img`
  animation: ${moveRightMobile} 5s linear infinite alternate;
  &:nth-child(2) {
    animation: ${moveLeftMobile} 5s linear infinite alternate;
  }
`;

export const AnimatedImageDown = styled.img`
  animation: ${moveDown} 5s linear infinite alternate;
`;

/*Blog Component*/
export const BlogWrapper = styled.div`
  width: 86.47%;
  margin-left: 64px;
  margin-top: 140px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  overflow-y: hidden;

  &:hover {
    cursor: pointer;
  }
  @media (max-width: 320px) {
    width: 300px;
    margin: 32px auto auto auto;
  }
`;
export const BlogTitle = styled.h2`
  text-transform: uppercase;
  color: #fff;
  font-size: 40px;
  font-weight: 600;
  line-height: 40px;
  letter-spacing: 0;
  @media (max-width: 320px) {
    margin-bottom: 18px;
    font-size: 32px;
    font-weight: 600;
    line-height: 40px;
    letter-spacing: 0;
  }
`;

export const CardWrapper = styled.div`
  width: 100%;
  height: auto;
  max-height: 595px;
  border-radius: 100px;
  cursor: pointer;
  backdrop-filter: blur(20px);
  background: rgba(255, 255, 255, 0.12);
  display: flex;
  justify-content: center;
  align-items: center;
  overflow-y: scroll;
  position: relative;
  &::-webkit-scrollbar {
    width: 8px;
  }

  &::-webkit-scrollbar-track {
    background-color: rgba(255, 255, 255, 0.12);
  }

  &::-webkit-scrollbar-thumb {
    background-color: #478bf9;
    border-radius: 10px;
  }
  @media (max-width: 320px) {
    width: 300px;
    max-height: 479px;
    border-radius: 50px;
    backdrop-filter: blur(20px);
    background: rgba(255, 255, 255, 0.12);
  }
`;

export const Card = styled.div`
  width: 467px;
  color: #fff;
  min-height: 196px;
  justify-content: center;
  ${CommonBgDarkColorBg};
  margin-bottom: 16px;
  padding: 16px 64px;
  border-radius: 196px;
  font-size: 24px;
  line-height: 28px;
  margin-top: 16px;
  &:hover {
    background-color: #478bf9;
    cursor: pointer;
  }
  @media (max-width: 320px) {
    width: 274px;
    min-height: 112px;
    padding: 15px 35px 15px 35px;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
  }
`;
export const ScrollBox = styled.div`
  max-height: 595px;
  @media (max-width: 320px) {
    margin-top: 85px;
  }
`;
export const TextBlog = styled.p`
  margin-top: 16px;
  @media (max-width: 320px) {
    margin-bottom: 30px;
    width: 204px;
    min-height: 60px;
    ${FontStyle};
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
  }
`;
export const DateBox = styled.div`
  margin-top: 14px;
  @media (max-width: 320px) {
    margin-top: -15px;
    ${FontStyle};
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
  }
`;
