import styled from 'styled-components';
import colors from '../../styles/colors';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  /* align-content: center; */
  align-items: center;
`;

export const Header = styled.div`
  display: flex;
  flex-direction: column;
  /* flex: 1; */
  margin-top: 50px;
  margin-bottom: 50px;
`;

export const Icon = styled.img``;

export const Title = styled.h1``;
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
  /* width: 50%; */
  align-items: center;
  align-items: center;
  flex-direction: column;
`;

export const FisrtButtonsContainer = styled.div`
  display: flex;
  width: 100%;
  flex-direction: row;
`;
