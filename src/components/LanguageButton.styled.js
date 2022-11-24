import styled from 'styled-components';

import { respondTo } from '../utils/respondTo';

export const Dropdown = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  position: absolute;
  right: 0;
  transform-origin: top;
  transform: rotateX(90deg);
  opacity: 0;
  filter: blur(2rem);
  transition: transform 500ms ease-in-out,
              opacity 500ms ease-in-out,
              filter 500ms ease-in-out;
  border-radius: 15px;
  backdrop-filter: blur(10px);
  box-shadow: inset 0 2px 1px rgba(255, 255, 255, 0.4),
              inset 0 40px 40px rgba(255, 255, 255, 0.12),
              inset 0 -3px 6px rgba(255, 255, 255, 0.12),
              inset 0 -6px 18px rgba(255, 255, 255, 0.12),
              inset 0 -40px 40px rgba(32, 32, 32, 0.05), // BG-COLOR
              inset 0 6px 12px rgba(255, 255, 255, 0.2);
  
  &.visible {
    transform: rotateX(0);
    opacity: 1;
    filter: blur(0);
  }

  & > button:first-child {
    border-radius: 15px 15px 0 0;
  }

  & > button:last-child {
    border-radius: 0 0 15px 15px;
  }
`;

export const Wrapper = styled.div`
  position: fixed;
  top: 0;
  right: 5rem;
  z-index: 10;
  padding: 0.5rem 0.75rem;
  border-radius: 0 0 10px 10px;
  cursor: pointer;

  ${respondTo.sm`
    right: 1rem;
  `}
`;

export const StyledButton = styled.button`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 0.5rem;
  padding: 0.5rem 0.75rem;
  white-space: nowrap;
  background: none;
  border: none;
  color: white;
  font-size: 1.2rem;
  cursor: pointer;

  &:hover {
    background: rgba(0, 0, 0, 0.5);
  }

  ${respondTo.sm`
    font-size: 1rem;
  `}
`;
