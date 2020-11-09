import styled from 'styled-components';
// import { TableCell, TableRow, TableHead } from '@material-ui/core';
// import PerfectScrollbar from 'react-perfect-scrollbar';
import colors from '../../styles/colors';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  padding: 10px 30px;
`;

export const Table = styled.table`
  margin-top: 15px;
  display: flex;
  flex-direction: column;
  flex: 1;
  border-collapse: collapse;
  width: 100%;
  margin-right: 30px;
  tr {
    padding: 15px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
`;

export const ReceiptItems = styled.tr`
  display: flex;
  flex-direction: row;
  border-bottom: 1px solid #ddd;
  border-left: 1px solid #ddd;
  border-right: 1px solid #ddd;
  color: ${colors.grayDark};
  td {
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 500;
    font-size: 15px;
    line-height: 24px;
  }
`;

export const HeaderTr = styled.tr`
  display: flex;
  flex-direction: row;
  background-color: ${colors.TERTIARY};
  border-top-left-radius: 15px;
  border-top-right-radius: 15px;
  color: ${colors.fontPrimary};
  text-align: left;
  th {
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 500;
    font-size: 12px;
    line-height: 4px;
    text-align: left;
  }
`;

export const Title = styled.h1`
  margin-top: 25px;
  font-style: normal;
  font-weight: 500;
  font-size: 25px;
  line-height: 39px;
  color: ${colors.PRIMARY};
`;

export const Button = styled.button`
  color: ${colors.PRIMARY};
  font-family: 'Montserrat';
  font-style: normal;
  font-size: 15px;
  line-height: 18px;
  color: ${colors.fontPrimary};
  background-color: ${colors.PRIMARY};
  border-radius: 60px;
  padding: 5px 20px;
  cursor: pointer;
`;
