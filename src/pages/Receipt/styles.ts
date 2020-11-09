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
  /* flex: 1; */
  margin-top: 50px;
  margin-bottom: 50px;
`;

export const ImgReceipt = styled.img``;

export const Title = styled.h1`
  color: ${colors.grayDark};
`;
export const FirstRowInfo = styled.div`
  display: flex;
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
  padding: 0 200px;
`;

export const SecondRowInfo = styled.div`
  display: flex;
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
  padding: 0 150px;
  margin: 100px;
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
  justify-content: space-between;
  flex-direction: row;
`;
