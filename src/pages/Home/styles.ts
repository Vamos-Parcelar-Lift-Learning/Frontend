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
  align-items: flex-start;
  padding: 7px;
  margin-left: 30px;
`;
const RightContainer = styled.div`
  display: flex;
  flex-direction: column;
  background: ${colors.PRIMARY};
  height: 94.4%;
  width: 100%;
  border-radius: 40px;
  margin: 18px;
  padding: 1%;
  align-items: center;
`;

const WrapperLogo = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  padding-left: 30px;
  padding: 20px;
  padding-top: 54px;
  flex-direction: column;
`;

const Header = styled.div`
  display: flex;
  width: 100%;
  flex-direction: row;
  align-items: flex-end;
  justify-content: flex-end;
  padding: 10px;
  span {
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
  width: 170px;
`;

const Title = styled.h1`
  text-align: start;
  font-style: normal;
  font-weight: 700;
  font-size: 32px;
  line-height: 48px;
  letter-spacing: -0.52px;
  color: ${colors.grayDark};

  span {
    color: ${colors.PRIMARY};
    text-decoration: underline;
    margin-top: 3.5%;
    margin-left: 2%;
  }
`;
const WrapperTitle = styled.div`
  display: flex;
  flex-direction: row;
  width: 448px;
  height: 96px;
  margin-top: 6%;
  margin-left: 5%;
  margin-bottom: 12%;
`;

const WrapperInputSearch = styled.div`
  display: flex;
  width: 140%;
  position: relative;
  align-items: flex-start;
  justify-content: flex-start;
  padding-bottom: 10%;
  margin-bottom: 50px;
  margin-left: 5%;
`;

const InfoTitle = styled.h3`
  width: 460px;
  height: 172px;
  margin-left: 5%;
  margin-bottom: 30%;
  padding-right: 60px;
  padding-bottom: 30%;
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 48px;
  letter-spacing: -0.5184px;
  color: ${colors.grayDark};
`;

const ContainerCard = styled.div`
  display: flex;
  justify-content: space-evenly;
  flex-direction: column;
  flex: 1;
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
  WrapperLogo,
  WrapperInputSearch,
  WrapperTitle,
};
