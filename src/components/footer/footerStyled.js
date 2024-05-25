import styled from 'styled-components';
import { FontStyle } from '../../commonStyle';

export const FooterWrapper = styled.div`
  min-height: 130px;
  border-width: 4px 4px 0 4px;
  border-style: solid;
  border-color: #478bf9;
  border-radius: 64px 64px 0 0;
  @media (max-width: 320px) {
    margin-top: 147px;
    width: 100%;
    min-height: 233px;
    border: 2px solid rgb(71, 139, 249);
    border-radius: 50px 50px 0 0;
  }
`;
export const FooterInner = styled.div`
  width: 100%;
  margin: 40px 0 24px 0;
  min-height: 66px;
  display: flex;
  justify-content: space-between;
  @media (max-width: 320px) {
    margin: -20px 0 0 20px;
    flex-direction: column;
    justify-content: flex-end;
    align-items: flex-start;
  }
`;
export const Menu = styled.div`
  width: 50%;
  display: flex;
  margin-top: 50px;
  justify-content: flex-start;
  @media (max-width: 320px) {
    width: 100%;
    flex-direction: column;
    justify-content: flex-end;
    align-items: flex-start;
  }
`;

export const UlList = styled.ul``;
export const LiList = styled.li`
  margin-right: 40px;
  ${FontStyle};
  a {
    color: white;
  }
  &.logo a {
    color: #478bf9;
    &:hover {
      text-decoration: underline;
    }
  }
  @media (max-width: 320px) {
    font-size: 14px;
    font-weight: 400;
    line-height: 20px;
    letter-spacing: 0;
    &.logo a {
      color: white;
      font-size: 14px;
      font-weight: 400;
      line-height: 20px;
      letter-spacing: 0;
      &:hover {
        text-decoration: none;
      }
    }
  }
`;
export const LogoIconsContainer = styled.div`
  @media (max-width: 320px) {
    margin-top: 20px;
    display: flex;
    justify-content: center;
    flex-direction: column;
  }
`;
export const LogoIcons = styled.div`
  width: 20%;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  @media (max-width: 320px) {
    margin-top: 20px;
    width: 290px;
  }
`;
export const Img = styled.img`
  margin: 0 8px -65px 0;
  &:hover {
    cursor: pointer;
    border-radius: 50px;
    background-color: #9f9da4;
  }
  @media (max-width: 320px) {
    margin: 0 0 20px 0;
  }
`;

export const Span = styled.span`
  color: white;
  ${FontStyle};
  display: flex;
  justify-content: flex-end;
  @media (max-width: 320px) {
    justify-content: flex-start;
    font-size: 14px;
    font-weight: 400;
    line-height: 20px;
  }
`;
