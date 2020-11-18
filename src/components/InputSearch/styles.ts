import styled from 'styled-components';
import colors from '../../styles/colors';

export const ContainerInputSearch = styled.input`
  display: flex;
  flex: 1;
  height: 100%;
  letter-spacing: -0.52px;
  line-height: 48px;
  font-style: normal;
  text-indent: 30px;
  text-align: justify;
  font-weight: 200;
  font-size: 18px;
  background: transparent;
  color: rgb(0, 0, 0, 0.5);
  border: none;
  &:focus {
    color: rgb(0, 0, 0, 1);
  }
`;

export const Container = styled.div`
  display: flex;
  padding: 10px 20px;
  width: 43vw;
  position: absolute;
  height: 57.46px;
  border: 0px solid;
  border-radius: 20px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  background-color: ${colors.quaternary};
  transition: ease-in-out, width 0.5s;
  flex-direction: row;
  &:hover {
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.5);
  }
`;
