import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  height: 80vh;
  width: 40vw;
  flex-direction: column;
  background-color: white;
  border-radius: 20px;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
`;

export const PaymentImage = styled.img`
  width: 80%;
`;

export const Info = styled.span`
  font-size: 18px;
  color: #4b4e5c;
  font-weight: 500;
  text-align: center;
  line-height: 40px;
  width: 85%;
`;

export const QrCode = styled.img`
  width: 14vw;
  height: 14vw;
  position: absolute;
  right: 35.5%;
  top: 35px;
`;
