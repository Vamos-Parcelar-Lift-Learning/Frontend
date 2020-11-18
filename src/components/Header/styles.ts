import styled from 'styled-components';
import colors from '../../styles/colors'


export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  align-content: flex-start;
  align-self: initial;
`;


export const TitleLocalization = styled.span`
  font-size: 20px;
  color: ${colors.PRIMARY};
  font-weight: 500;
`;

export const CashBackContainer = styled.div`
  display:flex;
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

export const Avatar = styled.img`
  width: 70px;
  height: 70px;
`;

export const CardImage = styled.img`
  height: 50px;
  width: 50px;
  margin-right: 0px;
`;

export const IconDiv = styled.div`
  display:flex;
  align-content: flex-start;
  align-items: center;
  `;
