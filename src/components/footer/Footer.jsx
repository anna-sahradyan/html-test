import React from 'react';
import {
  FooterInner,
  FooterWrapper,
  Img,
  LiList,
  LogoIcons,
  LogoIconsContainer,
  Menu,
  Span,
  UlList,
} from './footerStyled';
import { Content } from '../main/mainStyled';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <Content>
      <FooterWrapper>
        <FooterInner>
          <Menu>
            <UlList>
              <LiList className={'logo'}>
                <Link to={'/'}>Terms & Conditions</Link>
              </LiList>
            </UlList>
            <UlList>
              <LiList>
                <Link to={'/'}>Cookies</Link>
              </LiList>
            </UlList>
            <UlList>
              <LiList>
                <Link to={'/'}>Contacts</Link>
              </LiList>
            </UlList>
            <UlList>
              <LiList>
                <Link to={'/'}>Careers</Link>
              </LiList>
            </UlList>{' '}
            <UlList>
              <LiList>
                <Link to={'/'}>Brand Guide</Link>
              </LiList>
            </UlList>
          </Menu>
          <LogoIconsContainer>
            <Span>Our social media:</Span>
            <LogoIcons>
              <Img src={'/img/Tw.svg'} alt={'twitter'}></Img>
              <Img src={'/img/f.svg'} alt={'facebook'}></Img>
              <Img src={'/img/I.svg'} alt={'instagram'}></Img>
              <Img src={'/img/L.svg'} alt={'linkedin'}></Img>
              <Img src={'/img/Y.svg'} alt={'youtube'}></Img>
              <Img src={'/img/T.svg'} alt={'tik-tok'}></Img>
              <Img src={'/img/T.svg'} alt={'telegram'}></Img>
              <Img src={'/img/f.svg'} alt={'f'}></Img>
            </LogoIcons>
          </LogoIconsContainer>
        </FooterInner>
      </FooterWrapper>
    </Content>
  );
};

export default Footer;
