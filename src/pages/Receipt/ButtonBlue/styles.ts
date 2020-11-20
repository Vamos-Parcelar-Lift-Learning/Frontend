import styled from 'styled-components';
import colors from '../../../styles/colors';

export const Button = styled.button`
  background-color: ${colors.PRIMARY};
  border: 2px solid ${colors.PRIMARY};
  box-sizing: border-box;
  border-radius: 15px;
  padding: 5px 100px;
  flex: 0.4;
  /* margin-right: 10px; */
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 26px;
  margin-top: 10px;
  &:hover {
    background-color: ${colors.fontPrimary};
    border: 2px solid ${colors.PRIMARY};
    color: ${colors.PRIMARY};
    cursor: pointer;
  }
  color: ${colors.fontPrimary};
`;
