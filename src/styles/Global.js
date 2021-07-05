import { createGlobalStyle } from "styled-components";

export const Global = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  :root {
      font-size: 14px;

      @media (min-width: 768px) {
        font-size: 12px;
      }

      @media (min-width: 1024px) {
        font-size: 16px;
      }
    }
`;

export default Global;
