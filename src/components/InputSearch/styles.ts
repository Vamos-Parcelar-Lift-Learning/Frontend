import styled from 'styled-components';

// 'px' posição do componente na tela
interface InputSearchConfigurationProps {
  left: '68.66px' | '398px';
  top: '312.6px' | '92.6px';
}

export const ContainerInputSearch = styled.input<InputSearchConfigurationProps>`
  position: absolute;
  display: inline;
  width: 432.6px;
  height: 57.46px;
  padding: 0px;
  left: ${props => props.left};
  top: 51px;
  border: 0px solid;
  border-radius: 20px;
  font-family: 'Montserrat';
  line-height: 48px;
  letter-spacing: -0.52px;
  font-style: normal;
  text-indent: 62px;
  text-align: justify;
  font-weight: 200;
  font-size: 17.3px;
  color: rgb(0, 0, 0, 0.5);
  background-color: #e8ebff;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  /* here we use the dynamically computed prop */
  left: ${props => props.left};
  top: ${props => props.top};
`;
