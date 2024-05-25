import styled from 'styled-components';
import { FontStyle } from '../../commonStyle';

export const HeaderWrapper = styled.div``;
export const HeaderInner = styled.div`
  margin-top: 16px;
  width: 100%;
  min-height: 96px;
  border: 4px solid rgb(71, 139, 249);
  padding: 24px 48px 24px 48px;
  border-radius: 64px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media (max-width: 320px) {
    width: 100%;
    margin-top: 10px;
    min-height: 56px;
    border-radius: 64px;
    border: 2px solid #478bf9;
    padding: 10px 14px 10px 14px;
  }
`;
/*mobile inner*/
export const MobileInner = styled.div`
  display: none;
  @media (max-width: 320px) {
    display: block;
  }
`;
export const MobBtnInner = styled.div`
  width: 76px;
  display: flex;
  gap: 4px;
`;
export const MobBtn = styled.button`
  background-color: inherit;
  border: none;
`;
export const MobMenu = styled.div`
  position: relative;
`;
export const MobUl = styled.ul`
  position: absolute;
  width: 300px;
  display: flex;
  flex-direction: column;
  align-items: center;
  top: 50%;
  left: 50%;
  transform: translate(-84%, 10%);
  gap: 8px;
`;
export const MobLi = styled.li`
  width: 300px;
  color: white;
  padding: 13px 20px 13px 20px;
  border-radius: 28px;
  border: 2px solid #478bf9;
  font-size: 18px;
  font-weight: 400;
  line-height: 24px;
  letter-spacing: 0;
`;
export const LiBtnBox = styled.div`
  margin-top: 30px;
`;
export const LiBtn = styled.button`
    border: none;
    width: 100%;
    outline: none;
    background-color: inherit;
    color:white;
`;
/*Desktop inner*/
export const DesktopInner = styled.div`
  display: flex;
  @media (max-width: 320px) {
    display: none;
  }
`;
export const Logo = styled.div`
  width: 287px;
  min-height: 32px;
  @media (max-width: 320px) {
    width: 54px;
    min-height: 18px;
  }
`;
export const Menu = styled.div`
  margin-top: 20px;
  margin-right: 100px;
  align-items: center;
  display: block;
  @media (max-width: 320px) {
    display: none;
  }
`;
export const UlList = styled.ul`
  display: flex;
  color: rgb(255, 255, 255);
  justify-content: center;
  text-align: center;
  align-items: center;
`;
export const LiList = styled.li`
  ${FontStyle};
  margin-left: 32px;
`;
export const Buttons = styled.div`
  width: 287px;
  margin-left: 48px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  @media (max-width: 320px) {
    display: none;
  }
`;
export const Btn = styled.button`
  background-color: inherit;
  align-items: center;
  color: #fff;
  text-transform: uppercase;
  border: 2px solid rgb(157, 173, 242);
  border-radius: 24px;
  justify-content: center;
  text-align: center;
  ${FontStyle};
  cursor: pointer;
  &:nth-child(1) {
    display: flex;
    width: 75px;
    padding: 14px;
    justify-content: space-between;
  }

  &:nth-child(2) {
    width: 87px;
    height: 48px;
    &:focus {
      background-color: #478bf9;
    }
  }

  &:nth-child(3) {
    width: 97px;
    height: 48px;
    &:focus {
      background-color: #478bf9;
    }
  }
`;

export const Img = styled.img``;
