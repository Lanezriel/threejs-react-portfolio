import styled, { keyframes } from 'styled-components';
import { respondTo } from '../utils/respondTo';

const blurryAppear = keyframes`
  to {
    opacity: 1;
    filter: blur(0);
  }
`;

export const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: white;
  background: rgb(16,0,33);
  background: radial-gradient(circle, rgba(16,0,33,1) 0%, rgba(0,0,0,1) 100%);
`;

export const Title = styled.div`
  text-align: center;
  font-size: 4rem;
  font-weight: 700;
  opacity: 0;
  filter: blur(2rem);
  animation: ${blurryAppear} 2s ease-in-out forwards;

  ${respondTo.sm`
    font-size: 2.5rem;
  `}
`;

export const Subtitle = styled.div`
  text-align: center;
  font-size: 1rem;
  opacity: 0;
  filter: blur(2rem);
  animation: ${blurryAppear} 1s ease-in-out forwards;
  animation-delay: 1.5s;
`;
