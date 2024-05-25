import React, { useState } from 'react';
import {
  Btn,
  Buttons,
  DesktopInner,
  HeaderInner,
  HeaderWrapper,
  Img,
  LiBtn,
  LiBtnBox,
  LiList,
  Logo,
  Menu,
  MobBtn,
  MobBtnInner,
  MobileInner,
  MobLi,
  MobMenu,
  MobUl,
  UlList,
} from './headerStyled';
import { Link } from 'react-router-dom';
import { Content } from '../main/mainStyled';
import { useStateContext } from '../../context/ContainerProvider';

const Header = () => {
  const { closeMenu, openMenu, close } = useStateContext();
  const [lang, setLang] = useState(true);
  const switchLang = () => {
    setLang(prev => !prev);
  };
  return (
    <HeaderWrapper>
      <Content>
        <HeaderInner>
          <Logo></Logo>
          <DesktopInner>
            <Menu>
              <UlList>
                <LiList>
                  <Link to={'/'}>About us</Link>
                </LiList>
                <LiList>
                  <Link to={'/'}>Brands</Link>
                </LiList>
                <LiList>
                  <Link to={'/'}>Commissions</Link>
                </LiList>
                <LiList>
                  <Link to={'/'}>News</Link>
                </LiList>
                <LiList>
                  <Link to={'/'}>Contact us</Link>
                </LiList>
                <LiList>
                  <Link to={'/'}>Careers</Link>
                </LiList>
              </UlList>
            </Menu>
            <Buttons>
              <Btn onClick={switchLang}>
                <Img src='/img/union.svg' alt='union' className={'union'} />
                {lang ? 'en' : 'ru'}
              </Btn>
              <Btn>log in</Btn>
              <Btn>sign up</Btn>
            </Buttons>
          </DesktopInner>
          <MobileInner>
            <MobBtnInner>
              <MobBtn>
                <Img src={'/img/mobile_union.svg'} />
              </MobBtn>
              {close ? (
                <Img src={'/img/close.svg'} alt={'close'} onClick={closeMenu} />
              ) : (
                <Img
                  src={'/img/menu_icon.svg'}
                  alt={'close'}
                  onClick={openMenu}
                />
              )}
            </MobBtnInner>
            <MobMenu style={{ display: close ? 'block' : 'none' }}>
              <MobUl>
                <MobLi>
                  <Link to={'/'}>About us</Link>
                </MobLi>
                <MobLi>
                  <Link to={'/'}>Brands</Link>
                </MobLi>
                <MobLi>
                  <Link to={'/'}>Commissions</Link>
                </MobLi>
                <MobLi>
                  <Link to={'/'}>News</Link>
                </MobLi>
                <MobLi>
                  <Link to={'/'}>Contact us</Link>
                </MobLi>
                <MobLi>
                  <Link to={'/'}>Careers</Link>
                </MobLi>
                <LiBtnBox>
                  <MobLi className={'btnLi'}>
                    <Link to={'/'}>
                      <LiBtn>Log In</LiBtn>
                    </Link>
                  </MobLi>
                  <MobLi className={'btnLi'}>
                    <Link to={'/'}>
                      <LiBtn>Sign Up</LiBtn>
                    </Link>
                  </MobLi>
                </LiBtnBox>
              </MobUl>
            </MobMenu>
          </MobileInner>
        </HeaderInner>
      </Content>
    </HeaderWrapper>
  );
};

export default Header;
