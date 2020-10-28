import styled from 'styled-components';
import colors from '../../styles/colors';

const Container = styled.div`
  display: flex;
  flex-direction: row;
  background: ${colors.fontPrimary};
  width: 100%;
  height: 100%;
  flex: 1;
`;

const LeftContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 50px;
`;
const RightContainer = styled.div`
  display: flex;
  flex-direction: column;
  background: ${colors.primary};
  height: 100%;
  width: 100%;
  border-radius: 40px;
  margin: 18px;
  padding: 20px;
  align-items: center;
`;

const Header = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-left: 300px;
  flex: 1;
  span {
    width: 121px;
    height: 29px;
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 29px;
    margin-left: 50px;
    color: #f5f7fe;
  }
`;

const Logo = styled.img`
  /* display: flex;
  flex-direction: column; */
`;

const Title = styled.h1`
  /* display: flex;
  flex-direction: column; */
  width: 448px;
  height: 96px;
  font-style: normal;
  font-weight: 700;
  font-size: 32px;
  line-height: 48px;
  letter-spacing: -0.5184px;
  color: ${colors.grayDark};
`;

const InfoTitle = styled.h3`
  width: 488px;
  height: 192px;
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 48px;
  letter-spacing: -0.5184px;
  color: ${colors.grayDark};
  margin-left: 21px;
`;

const ContainerCard = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 150px;
`;
export {
  ContainerCard,
  Container,
  Title,
  InfoTitle,
  Logo,
  LeftContainer,
  RightContainer,
  Header,
};
