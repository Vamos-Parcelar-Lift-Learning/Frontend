import styled from 'styled-components';

import colors from '../../styles/colors';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  align-items: center;
`;

export const ListContainer = styled.div`
  width: 100%;
  flex: 1;
  overflow-y: scroll;
  overflow-x: hidden;
`;

export const Title = styled.span`
  width: 100%;
  font-size: 20px;
  color: ${colors.PRIMARY};
  font-weight: 500;
`;
