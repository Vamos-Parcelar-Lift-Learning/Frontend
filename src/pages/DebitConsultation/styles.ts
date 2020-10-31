import styled from 'styled-components';
import { Card, IconButton, Checkbox } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import colors from '../../styles/colors';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  align-items: center;
`;

export const Title = styled.span`
  width: 100%;
  font-size: 20px;
  color: ${colors.primary};
  font-weight: 500;
`;

export const CardTitle = styled.span`
  width: 100%;
  font-size: 20px;
  color: ${colors.fontPrimary};
  font-weight: 500;
`;

export const CardDebit = styled(Card)`
  width: 100%;
  margin: 10px;
  && {
    background-color: ${colors.TERTIARY};
    border-radius: 10px;
    padding: 0px 10px;
  }
`;

export const CardContainer = styled.div`
  flex-direction: row;
  display: flex;
  justify-content: space-between;
`;

export const InfoContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const CollapseButton = styled(IconButton)`
  && {
    color: ${colors.fontPrimary};
  }
`;

export const CardCheckbox = styled(Checkbox)`
  && {
    color: ${colors.fontPrimary};
    margin-right: 25px;
  }
`;

export const useStyles = makeStyles(theme => ({
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest
    })
  },
  expandOpen: {
    transform: 'rotate(180deg)'
  }
}));
