import styled from 'styled-components';
import colors from '../../styles/colors';

export const Wrapper = styled.div`
  display: flex;
  height: 100%;
  background: ${colors.primary};
  padding-top: 20px;
  padding-bottom: 20px;
  /* overflow: auto; */
`;

export const BoxContainer = styled.div`
  display: flex;
  height: 100%;
  width: 100%;
  margin-right: 10px;
  border-radius: 60px;
  padding: 40px;

  background: ${colors.fontPrimary};
`;
