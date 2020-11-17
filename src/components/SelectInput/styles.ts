import styled from 'styled-components';
import Select from '@material-ui/core/Select';

export const Container = styled.div`
  display: flex;
  margin-bottom: 10px;
  width: 65%;
  height: 35px;
  border: 0px solid;
  border-radius: 20px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  background-color: #e8ebff;
  transition: ease-in-out, width 0.5s;
  flex-direction: row;
  &:hover {
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.5);
  }

  justify-content: center;
`;

export const SelectButton = styled(Select)`
  width: 90%
`
