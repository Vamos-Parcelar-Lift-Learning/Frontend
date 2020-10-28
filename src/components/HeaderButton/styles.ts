import styled from 'styled-components';

export const ContainerButton = styled.button`
  position: absolute;
  width: 77.6px;
  height: 32.62px;
  border: 3px solid #f5f7fe;
  border-radius: 60px;
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: normal;
  color: #f5f7fe;
  background-color: #5d64d3;

  &::hover {
    background-color: #f5f7fe;
    color: #5d64d3;
    box-shadow: 0 12px 16px 0 rgba(0, 0, 0, 0.24),
      0 17px 50px 0 rgba(0, 0, 0, 0.19);
  }
  /* .disabled {
  opacity: 0.6;
  cursor: not-allowed;
} */
`;
