import styled from 'styled-components';

import colors from '../../styles/colors';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  padding: 10px 30px;
`;

export const InputLocatorContainer = styled.div`
  display: flex;
  flex-direction:column;
  margin-top: 10px;
  margin-bottom: 10px;
  align-content: center;
  align-items: center;
`;

export const ListContainer = styled.div`
  width: 100%;
  flex: 1;
  overflow-y: scroll;
  overflow-x: hidden;
  margin-top: 3vh;
`;

export const Title = styled.span`
  width: 100%;
  font-size: 20px;
  margin-top: 10vh;
  color: ${colors.PRIMARY};
  font-weight: 500;
`;
