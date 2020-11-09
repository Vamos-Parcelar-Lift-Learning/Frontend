import styled from 'styled-components';
import colors from '../../../styles/colors';

export const Button = styled.button`
  background: ${colors.fontPrimary};
  border: 2px solid ${colors.PRIMARY};
  box-sizing: border-box;
  border-radius: 15px;
  padding: 5px 35px;
  color: ${colors.PRIMARY};
  flex: 0.4;

  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 26px;
  /* margin-right: 15px; */
  &:hover {
    background-color: ${colors.PRIMARY};
    color: ${colors.fontPrimary};
    cursor: pointer;
  }
`;
