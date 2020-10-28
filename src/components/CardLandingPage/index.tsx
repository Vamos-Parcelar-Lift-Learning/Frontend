import React from 'react';
import PropTypes from 'prop-types';
import { LandingPageCard } from './styles';

interface LandingPageCard {
  text: string;
}

const CardLandingPage: React.FC<LandingPageCard> = ({ text }) => {
  return <LandingPageCard>{text}</LandingPageCard>;
};

CardLandingPage.propTypes = {
  text: PropTypes.string.isRequired,
};
export default CardLandingPage;
