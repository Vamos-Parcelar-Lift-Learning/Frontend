import styled from 'styled-components';
import colors from '../../styles/colors';

const TitleContainer = styled.div`
  display: flex;
  align-content: flex-start;
  text-align: center;
  font-style: normal;
  font-weight: 600;
  font-size: 22px;
  color: ${colors.PRIMARY};
`;

const InputLabelContainer = styled.div`
  display: flex;
  flex: 1;
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
  margin-top: 25px;
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
  margin-top: 30px;
  align-items: center;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
  width: 100%;
`;
const Header = styled.div`
  display: flex;
  width: 98%;
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;
`;

export {
  TitleContainer,
  Container,
  InputContainer,
  ImgContainer,
  InputLabelContainer,
  ButtonContainer,
  Header
};

export const Wrapper = styled.div`
  display: flex;
  height: 100%;
  background: ${colors.PRIMARY};
  padding: 20px;
  /* overflow: auto; */
`;

export const BoxContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
  border-radius: 60px;
  padding: 10px;
  background: ${colors.fontPrimary};
`;
