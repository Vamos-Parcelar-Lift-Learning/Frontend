import React from 'react';
import { LandingPageCard, CardText, CardImage } from './styles';

interface LandingPageCard {
  text: string;
  icon: any;
  link?: any;
}

const CardLandingPage: React.FC<LandingPageCard> = ({ text, icon, link }) => {
  return (
    <LandingPageCard>
      <CardImage src={icon} />
      <a href={link}>
        <CardText>{text}</CardText>
      </a>
    </LandingPageCard>
  );
};

export default CardLandingPage;
