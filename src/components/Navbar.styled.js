import styled, { keyframes } from "styled-components";
import { NavLink } from "react-router-dom";

import { respondTo } from "../utils/respondTo";

const blurryAppear = keyframes`
  to {
    opacity: 1;
    filter: blur(0);
  }
`;

export const Wrapper = styled.div`
  position: fixed;
  z-index: 10;
  top: 3rem;
  left: 3rem;

  ${respondTo.sm`
    top: 1rem;
    left: 1rem;
  `}
`;

export const Toggler = styled.div`
  width: 5rem;
  height: 5rem;
  border-radius: 15px;
  backdrop-filter: blur(10px);
  box-shadow: inset 0 2px 1px rgba(255, 255, 255, 0.4),
              inset 0 40px 40px rgba(255, 255, 255, 0.12),
              inset 0 -3px 6px rgba(255, 255, 255, 0.12),
              inset 0 -6px 18px rgba(255, 255, 255, 0.12),
              inset 0 -40px 40px rgba(32, 32, 32, 0.05), // BG-COLOR
              inset 0 6px 12px rgba(255, 255, 255, 0.2);
  color: white;
  cursor: pointer;
  opacity: 0;
  animation: ${blurryAppear} 1s ease-in-out forwards;
  animation-delay: 2s;
  filter: blur(2rem);

  & > svg {
    width: 5rem;
    height: 5rem;
    padding: 1rem;
    border-radius: 15px;

    &:hover {
      background: rgba(0, 0, 0, 0.5);
    }
    
    ${respondTo.sm`
      width: 3rem;
      height: 3rem;
      padding: 0.5rem;
    `}
  }

  ${respondTo.sm`
    width: 3rem;
    height: 3rem;
  `}
`;

export const Menu = styled.div`
  position: relative;
  top: 0.5rem;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  color: white;
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
  
  & > a:first-child {
    border-radius: 15px 15px 0 0;
    padding-top: 0.5rem;
  }

  & > a:last-child {
    border-radius: 0 0 15px 15px;
    padding-bottom: 0.5rem;
  }

  ${respondTo.sm`
    top: 0.25rem;
  `}
`;

export const StyledLink = styled(NavLink)`
  display: flex;
  align-items: center;
  gap: 1rem;
  width: 100%;
  color: white;
  padding: 0.5rem 1rem;
  text-decoration: none;
  font-size: 1.5rem;
  font-weight: 700;

  ${respondTo.sm`
    font-size: 1rem;
    padding: 0.25rem 0.5rem;
  `}

  & .icon {
    width: 2rem;
    height: 2rem;
    border-radius: 50%;
    padding: 0.25rem;

    & .fill {
      fill: white;
      transition: fill 300ms 200ms ease-in-out;
    }

    & .stroke {
      stroke: white;
      transition: stroke 300ms 200ms ease-in-out;
    }

    ${respondTo.sm`
      width: 1.5rem;
      height: 1.5rem;
    `}
  }

  & > .text {
    flex-grow: 1;
  }

  &:hover {
    background: rgba(0, 0, 0, 0.5);
  }

  &.active {
    & .icon {
      border: solid 1px white;
    }
  }
`;
