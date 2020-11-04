import styled from 'styled-components';
import colors from '../../styles/colors';

export const LandingPageCard = styled.div`
  color: ${colors.grayDark};
  background: ${colors.quaternary};
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 20px;
  height: 100px;
  width: 300px;
  flex-direction: row;
  display: flex;
  align-items: center;
  padding: 30px;
`;

export const CardText = styled.span`
  display: flex;
  flex: 1;
  font-weight: 400;
  font-size: 18px;
  text-align: center;
  font-family: 'Montserrat';
  font-style: normal;
  letter-spacing: -0.52px;
`;

export const CardImage = styled.img`
  height: 50px;
  width: 50px;
  margin-right: 20px;
`;
