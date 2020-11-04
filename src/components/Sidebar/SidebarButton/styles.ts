import styled from 'styled-components';
import colors from '../../../styles/colors';

const Button = styled.button`
  background-color: ${colors.PRIMARY};
  color: ${colors.fontPrimary};
  border: 0;
  display: flex;
  align-items: center;
  font-weight: bold;
  width: 235px;
  height: 55px;
  &:hover {
    background-color: ${colors.fontPrimary};
    color: ${colors.PRIMARY};
    border-bottom-left-radius: 15px;
    border-top-left-radius: 15px;
    width: 260px;
    padding-left: 10px;
    cursor: pointer;
  }
`;

const Text = styled.span`
  border: 0;
  font-size: 18px;
  margin-left: 8px;
  padding-left: 30px;
`;

export { Button, Text };
