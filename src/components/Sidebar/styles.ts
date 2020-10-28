import styled from 'styled-components';
import colors from '../../styles/colors';

const Container = styled.div`
  height: 100%;
  width: 300px;
  background: ${colors.primary};
  display: flex;
  flex-direction: column;
`;

const ContainerMenu = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 100px;
  margin-left: 30px;
`;

const Logo = styled.img`
  width: 170px;
`;

const WrapperLogo = styled.div`
  margin-top: 20px;
  display: flex;
  align-items: center;
  align-self: center;
  justify-content: center;
  padding: 20px;
  padding-left: 60px;
  padding-right: 60px;
  flex-direction: column;
`;

export { Container, ContainerMenu, Logo, WrapperLogo };
