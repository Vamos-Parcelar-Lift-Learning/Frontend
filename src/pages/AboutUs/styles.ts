import styled from 'styled-components';
import colors from '../../styles/colors';

const TitleContainer = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  padding: 3%;
  align-content: center;
  text-align: center;
`;

const Title = styled.span`
  font-size: 20px;
  color: ${colors.fontPrimary};
  font-weight: 500;
`;

const Header = styled.div`
  display: flex;
  padding: 0px;
  align-self: flex-start;
  justify-content: flex-start;
  align-items: center;
`;

const ContainerCard = styled.div`
  display: flex;
  justify-content: space-around;
  flex-direction: column;
  align-self: center;
  align-items:center;
  flex: 1;
`;

const RightContainer = styled.div`
  display: flex;
  flex-direction: column;
  background: ${colors.PRIMARY};
  height: 94.4%;
  width: 50%;
  border-radius: 40px;
  margin: 50px;
  padding: 1%;
  align-items: center;

`;

export {
  TitleContainer,
  Header,
  ContainerCard,
  Title,
  RightContainer
};


