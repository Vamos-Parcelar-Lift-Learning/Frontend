import styled from 'styled-components';
import colors from '../../styles/colors';

const TitleContainer = styled.div`
  display: flex;
  align-content: flex-start;
  text-align: center;
  font-family: Montserrat;
  font-style: normal;
  font-weight: 600;
  font-size: 22px;
  color: ${colors.PRIMARY};
`;

const InputLabelContainer = styled.div`
  display: flex;
  flex: 1;
  font-family: Montserrat;
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 29px;
  align-content: flex-start;
  margin: 5px 0px;
  color: ${colors.PRIMARY};
`;

const ImgContainer = styled.img`
  display: flex;
  margin-top: 30px;
  margin-bottom: 5px;
  width: 170px;
  align-items: flex-start;
`;
const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px;
`;

const ButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 42px;
  align-items: center;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
  width: 100%;
`;

export {
  TitleContainer,
  Container,
  InputContainer,
  ImgContainer,
  InputLabelContainer,
  ButtonContainer
};
