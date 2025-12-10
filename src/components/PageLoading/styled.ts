import styled, { keyframes } from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

export const spin = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`;

export const Spinner = styled.div`
  font-size: 50px;
  color: #0070f3;
  animation: ${spin} 1s linear infinite;
`;

export const Text = styled.div`
  margin-left: 15px;
  font-size: 18px;
  font-weight: 500;
`;
