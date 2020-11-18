import styled from 'styled-components';

import colors from '../../styles/colors';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  align-items: center;
`;

export const ContainerImage = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  padding: 25px;
  align-items: center;
`;

export const SubContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: left;
  padding: 25px;
`;

export const ContainerName = styled.div`
  width: 100px;
  padding-left: 3px;
  display: flex;
  flex-direction: column;
  margin-right: 850px;
  align-items: left;
  white-space: nowrap;
  flex: 1;
`;

export const ContainerNameField = styled.div`
  width: 100px;
  padding-left: 3px;
  display: flex;
  flex-direction: column;
  margin-right: 850px;
  align-items: left;
  white-space: nowrap;
  flex: 0.25;
`;

export const ContainerField = styled.div`
  width: 500px;
  display: flex;
  flex-direction: column;
  margin-right: 850px;
  align-items: left;
  white-space: nowrap;
  flex: 0.12;
`;

export const Title2 = styled.span`
  width: 100%;
  font-size: 12px;
  color: ${colors.PRIMARY};
  font-weight: 500;
`;

export const Title3 = styled.span`
  width: 100%;
  font-size: 16px;
  color: ${colors.PRIMARY};
  font-weight: 500;
  margin-top: 15px;
`;

export const Title1 = styled.span`
  width: 100%;
  font-size: 20px;
  color: ${colors.PRIMARY};
  font-weight: 500;
`;

export const Avatar = styled.img`
  width: 70px;
  height: 70px;
`;

export const CashBack = styled.div`
  border: 2px solid ${colors.PRIMARY};
  padding: 10px 35px;
  height: 50px;
  border-radius: 20px;
  display: flex;
`;

export const CashBackText = styled.span`
  font-size: 20px;
  color: ${colors.PRIMARY};
  font-weight: 500;
`;

const Header = styled.div`
  display: flex;
  width: 98%;
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;
`;

export {
  Header
};
