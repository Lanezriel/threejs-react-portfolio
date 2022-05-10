import { css } from "styled-components";
import { breakpoints } from "./variables";

export const respondTo = Object.keys(breakpoints).reduce(
  (acc, label) => {
    acc[label] = (...args) => css`
      @media (max-width: ${breakpoints[label]}) {
        ${css(...args)};
      }
    `;
    return acc;
  },
  {}
);
