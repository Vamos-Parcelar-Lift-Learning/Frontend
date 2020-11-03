import styled from 'styled-components';
import colors from '../../styles/colors';

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
`;

export const TitleLocalization = styled.span`
  font-size: 20px;
  color: ${colors.PRIMARY};
  font-weight: 500;
`;

export const CashBack = styled.div`
  border: 2px solid ${colors.PRIMARY};
  padding: 10px 35px;
  border-radius: 20px;
`;

export const CashBackText = styled.span`
  font-size: 20px;
  color: ${colors.PRIMARY};
  font-weight: 500;
`;

export const Avatar = styled.div`
  border: 2px solid ${colors.PRIMARY};
  padding: 30px;
  border-radius: 35px;
`;
