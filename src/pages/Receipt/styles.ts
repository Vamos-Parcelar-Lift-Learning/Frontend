import styled from 'styled-components';
import colors from '../../styles/colors';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  align-items: center;
`;

export const HeaderReceipt = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  flex: 1;
  margin-top: 30px;
  margin-bottom: 50px;
`;

export const ImgReceipt = styled.img``;

export const Title = styled.h1`
  color: ${colors.grayDark};
`;
export const FirstRowInfo = styled.div`
  display: flex;
  width: 75vh;
  flex-direction: row;
  justify-content: space-around;
`;

export const SecondRowInfo = styled.div`
  display: flex;
  width: 75vh;
  flex-direction: row;
  align-items: flex-flex-start;
  justify-content: space-around;
  margin-top: 70px;
  margin-bottom: 70px;
`;

export const ContainerButtons = styled.div`
  display: flex;
  flex: 1;
  align-items: center;
  flex-direction: column;
`;

export const FisrtButtonsContainer = styled.div`
  display: flex;
  width: 100%;
  margin-bottom: 10px;
  justify-content: center;
  flex-direction: row;
`;
