import styled from 'styled-components';
import { makeStyles } from '@material-ui/core/styles';

export const CalendarContainer = styled.div`
  && {
    color: #e8ebff;
    padding: 10px 100px;
    border-radius: 25px;
    height: 48px;
  }
`;

export const Container = styled.div`
  display: flex;
  margin-bottom: 10px;
  width: 15vw;
  height: 7.5vh;
  border: 0px solid;
  border-radius: 20px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  background-color: #e8ebff;
  transition: ease-in-out, width 0.5s;
  flex-direction: row;
  &:hover {
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.5);
  }
`;

export const useStyles = makeStyles(theme => ({}));
