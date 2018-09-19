import styled, { css } from "styled-components";
import { getEm } from "../../utils";
import { ITextProps } from "./types";

const textCss = ({
  bold,
  size,
  uppercase,
  lowercase,
  capitalize
}: ITextProps) => css`
  text-transform: ${() => {
    if (uppercase && !lowercase && !capitalize) {
      return "uppercase";
    }
    if (lowercase && !uppercase && !capitalize) {
      return "lowercase";
    }
    if (capitalize && !lowercase && !uppercase) {
      return "capitalize";
    }
    return null;
  }}
  font-weight: ${bold && "bold"};
  font-size:  ${getEm(size)}em;
`;

export const T = styled.div`
  ${(props: any) => textCss(props)};
`;
