import styled from 'styled-components';
import InputUI from '@material-ui/core/Input';

import colors from '../../styles/colors';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  align-items: center;
`;

export const CardContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-top: 2vh;
  padding: 0px 5vw;
`;

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 2vh;
  margin-right: 20px;
`;

export const Card = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
`;

export const Title = styled.span`
  width: 100%;
  font-size: 20px;
  color: ${colors.PRIMARY};
  font-weight: 500;
`;

export const CardPix = styled.img`
  width: 100%;
`;

export const ValueContainer = styled.div`
  width: 75%;
  padding: 10px 20px;
  display: flex;
  flex-direction: row;
  border-bottom: 2px solid ${colors.PRIMARY};
  border-left: 2px solid ${colors.PRIMARY};
  border-right: 2px solid ${colors.PRIMARY};
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
  justify-content: space-between;
`;

export const ValueText = styled.span`
  font-size: 18px;
  color: ${colors.PRIMARY};
  font-weight: 500;
`;

export const TitleField = styled.span`
  font-size: 18px;
  color: ${colors.PRIMARY};
  font-weight: 500;
`;

export const FieldContainer = styled.div`
  padding: 10px 20px;
  align-items: center;
  justify-content: center;
  background-color: ${colors.secondary};
  width: 20vw;
  border-radius: 15px;
  margin-top: 5px;
`;

export const FieldValue = styled.span`
  font-size: 18px;
  color: ${colors.grayLight};
  font-weight: 500;
  text-align: left;
`;

export const SelectContainer = styled.div`
  position: absolute;
  width: 100%;
  justify-content: center;
  height: 100%;
  display: flex;
  flex-direction: column;
  padding: 0px 30px;
`;

export const TitleCard = styled.span`
  font-size: 15px;
  color: white;
  text-align: left;
  margin-bottom: 5px;
`;

export const Row = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
`;

export const Input = styled(InputUI)`
  &&{
    font-size: 18px;
  }
`;
