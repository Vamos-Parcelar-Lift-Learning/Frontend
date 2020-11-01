import styled from 'styled-components';
import { Button, CircularProgress } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import colors from '../../styles/colors';

export const Container = styled.div``;

export const ButtonContainer = styled(Button)`
  && {
    color: ${colors.fontPrimary};
    background-color: ${colors.primary};
    font-family: Montserrat;
    font-style: normal;
    font-weight: 600;
    line-height: 32px;
    padding: 10px 100px;
    border-radius: 25px;
    height: 3.5vw;
    align-items: center;
  }
  &:hover {
    box-shadow: 0 4px 4px 0 rgba(0, 0, 0, 0.5);
  }
`;

export const useStyles = makeStyles({
  button: {
    background: `linear-gradient(45deg, ${colors.tertiary} 5%, ${colors.primary} 90%)`,
  },
  label: {
    textTransform: 'capitalize',
    fontSize: 16,
  },
});

export const Loading = styled(CircularProgress)`
  && {
    color: white;
  }
`;
