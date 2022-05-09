import styled, { keyframes } from 'styled-components';

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
  font-size: 5rem;
  font-weight: 700;
  opacity: 0;
  filter: blur(2rem);
  animation: ${blurryAppear} 2s ease-in-out forwards;
`;

export const Subtitle = styled.div`
  font-size: 1.5rem;
  opacity: 0;
  filter: blur(2rem);
  animation: ${blurryAppear} 1s ease-in-out forwards;
  animation-delay: 1.5s;
`;