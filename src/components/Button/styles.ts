import styled from 'styled-components';
import { Button, CircularProgress } from '@material-ui/core';
import colors from '../../styles/colors';

export const Container = styled.div``;

export const ButtonContainer = styled(Button)`
  && {
    color: ${colors.fontPrimary};
    background-color: ${colors.primary};
    font-size: 14px;
    padding: 10px 100px;
    border-radius: 20px;
  }
`;
