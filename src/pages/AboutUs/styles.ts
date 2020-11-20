import styled from 'styled-components';
import colors from '../../styles/colors';

const Wrapper = styled.div`
  display: flex;
  height: 100%;
  background: ${colors.PRIMARY};
  padding: 20px;
`;

const BoxContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
  border-radius: 60px;
  padding: 40px;
  background: ${colors.fontPrimary};
`;

const Header = styled.div`
  display: flex;
  padding: 0px;
  align-self: flex-start;
  justify-content: flex-start;
`;
const ContentBoxContainer = styled.div`
  display: flex;
  flex-direction:column;
  height: 100%;
  width: 100%;
  border-radius: 60px;
`;

export {
  Wrapper,
  BoxContainer,
  Header,
  ContentBoxContainer,
};


