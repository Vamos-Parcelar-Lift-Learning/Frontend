import styled from 'styled-components';
import colors from '../../../styles/colors';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Label = styled.label`
  color: ${colors.grayLight};
  font-size: 15px;
  font-weight: 500;
`;
export const Data = styled.span`
  color: ${colors.grayDark};
  font-size: 15px;
  font-weight: 500;
  line-height: 21px;
`;
