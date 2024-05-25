import React from 'react';
import { BannerBtn, BannerWrapper, Span, Text, Title } from './mainStyled';
import { useStateContext } from '../../context/ContainerProvider';

const Banner = () => {
  const { close } = useStateContext();
  return (
    <BannerWrapper close={close}>
      <Title>
        HOUSE OF <Span>GAMBLING</Span>
      </Title>
      <Text>Raise your ROI with direct advertiser</Text>
      <BannerBtn>become a partner</BannerBtn>
    </BannerWrapper>
  );
};

export default Banner;
