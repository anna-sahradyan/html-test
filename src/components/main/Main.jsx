import React from 'react';
import Banner from './Banner';
import GroupIcons from './GroupIcons';
import Blog from './Blog';
import {
  BannerContainer,
  BlogContainer,
  Container,
  GroupIconsContainer,
  MainWrapper,
} from './mainStyled';

const Main = () => {
  return (
    <Container>
      <MainWrapper>
        <BannerContainer>
          <Banner />
        </BannerContainer>
        <GroupIconsContainer>
          <GroupIcons />
        </GroupIconsContainer>
        <BlogContainer>
          <Blog />
        </BlogContainer>
      </MainWrapper>
    </Container>
  );
};

export default Main;
