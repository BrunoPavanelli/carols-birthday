// HeartsRain.tsx
import styled, { keyframes } from 'styled-components';

const fall = keyframes`
  0% {
    transform: translateY(-100px) rotate(0deg);
    opacity: 1;
  }
  100% {
    transform: translateY(100vh) rotate(360deg);
    opacity: 0;
  }
`;

export const Heart = styled.div`
  position: absolute;
  top: -10px;
  font-size: 20px;
  color: #8e44ad;
  animation: ${fall} 4s linear infinite;
  pointer-events: none;
  user-select: none;
  z-index: 10;
`;

export const HeartContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  overflow: hidden;
  z-index: 5;
`;
