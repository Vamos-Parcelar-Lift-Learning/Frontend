import styled from 'styled-components';

import colors from '../../styles/colors';

// export const Container = styled.div`
//   display: flex;
//   flex-direction: column;
//   flex: 1;
//   align-items: Center;
// `;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  align-items: center;
`;

export const SubContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-right: 850px;
  align-items: left;
  flex: 0.3;
`;

export const ContainerName = styled.div`
  width: 100px;
  padding-left: 3px;
  display: flex;
  flex-direction: column;
  margin-right: 850px;
  align-items: left;
  flex: 0.12;
`;

export const ContainerData = styled.div`
  display: grid;
  width: 100px;
  padding-left: 3px;
  flex-direction: column;
  margin-right: 850px;
  align-items: left;
  white-space: nowrap;
  flex: 0.15;
`;

export const ContainerCPF = styled.div`
  width: 100px;
  padding-left: 3px;
  display: flex;
  flex-direction: column;
  margin-right: 850px;
  align-items: left;
  flex: 0.1;
`;

export const Title2 = styled.span`
  width: 100%;
  font-size: 12px;
  color: ${colors.primary};
  font-weight: 500;
`;

export const Title3 = styled.span`
  width: 100%;
  font-size: 16px;
  color: ${colors.primary};
  font-weight: 500;
`;

export const Title1 = styled.span`
  width: 100%;
  font-size: 20px;
  color: ${colors.primary};
  font-weight: 500;
  flex: 0.15;
`;
