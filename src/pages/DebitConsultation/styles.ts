import styled from 'styled-components';

import colors from '../../styles/colors';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  align-items: center;
`;

export const InputLocatorContainer = styled.div`
  display: flex;
  flex: 1;
  margin-top: 10px;
  flex-direction: column;
  align-content: center;
  align-items: center;
`;

export const ListContainer = styled.div`
  width: 100%;
  flex: 1;
  overflow-y: scroll;
  overflow-x: hidden;
  margin-top: 5vh;
`;

export const Title = styled.span`
  width: 100%;
  font-size: 20px;
  color: ${colors.PRIMARY};
  font-weight: 500;
`;
