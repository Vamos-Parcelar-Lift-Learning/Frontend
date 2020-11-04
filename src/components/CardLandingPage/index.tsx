import React from 'react';
import { LandingPageCard, CardText, CardImage } from './styles';

interface LandingPageCard {
  text: string;
  icon: any;
}

const CardLandingPage: React.FC<LandingPageCard> = ({ text, icon }) => {
  return (
    <LandingPageCard>
      <CardImage src={icon} />
      <CardText>{text}</CardText>
    </LandingPageCard>
  );
};

export default CardLandingPage;
