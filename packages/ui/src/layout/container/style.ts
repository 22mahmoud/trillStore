import styled, { css } from "styled-components";

import { flexJustifyAndAlignment, getMargin, getPadding } from "../../utils";
import { IContainerProps } from "./types";

const containerCss = (props: IContainerProps) => css`
  height: ${props.height};
  color: ${props.color};
  background-color: ${props.bg};
  display: ${props.display};
  flex-direction: ${props.dir};
  justify-content: ${flexJustifyAndAlignment(props.justify)};
  align-items: ${flexJustifyAndAlignment(props.align)};
  ${getMargin(props)};
  ${getPadding(props)};
`;

export const C = styled.div`
  ${(props: IContainerProps) => containerCss(props)};
`;
