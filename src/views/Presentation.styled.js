import styled from "styled-components";
import { respondTo } from '../utils/respondTo';

export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: black;
  color: white;
`;

export const Section = styled.section`
  position: relative;
  display: flex;
  align-items: center;
  height: 100vh;
`;

export const Title = styled.div`
  text-align: center;
  font-size: 4rem;
  font-weight: 700;
  color: #888;

  ${respondTo.sm`
    font-size: 2rem;
  `}
`;
