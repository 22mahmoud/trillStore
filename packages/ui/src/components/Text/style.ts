import styled, { css } from "styled-components";
import { getEm } from "../../utils";
import { ITextProps } from "./types";

const textCss = ({
  bold,
  size,
  uppercase,
  lowercase,
  capitalize,
  color
}: ITextProps) => css`
  text-transform: ${(): string | null => {
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
  }};
  ${size && `font-size: ${getEm(size)}em`};
  font-weight: ${bold && "bold"};
  color: ${color} || 'red';
`;

export const T = styled.p`
  ${(props: any) => textCss(props)};
`;
