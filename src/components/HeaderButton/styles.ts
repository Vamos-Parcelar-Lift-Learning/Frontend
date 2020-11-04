import styled from 'styled-components';
import colors from '../../styles/colors';

export const ContainerButton = styled.button`
  width: 77.6px;
  height: 32.62px;
  border: 3px solid ${colors.fontPrimary};
  border-radius: 60px;
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: normal;
  color: ${colors.fontPrimary};
  margin-left: 24px;
  background-color: ${colors.primary};

  &::hover {
    background-color: ${colors.fontPrimary};
    color: ${colors.primary};
    box-shadow: 0 12px 16px 0 rgba(0, 0, 0, 0.24),
      0 17px 50px 0 rgba(0, 0, 0, 0.19);
  }
`;
