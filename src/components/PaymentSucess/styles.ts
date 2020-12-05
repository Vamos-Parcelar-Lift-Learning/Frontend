import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  height: 80vh;
  width: 40vw;
  flex-direction: column;
  background-color: white;
  border-radius: 20px;
  align-items: center;
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

export const CheckImage = styled.img`
  width: 70px;
  height: 70px;
  position: absolute;
  right: 30%;
  top: 0;
`;

export const Text = styled.span`
  border: 0;
  font-size: 18px;
`;
