import styled from 'styled-components';
import { makeStyles } from '@material-ui/core/styles';

import colors from '../../styles/colors';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  align-items: Center;
`;

export const SubContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  align-items: center;
`;

export const ContainerLeft = styled.div`
  display: flex;
  flex-direction: column;
  margin-right: 800px;
  align-items: left;
  flex: 0.2;
`;
export const Form = styled.div`
  display: flex;
  flex-direction: column;
  margin-right: 800px;
  align-items: left;
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
