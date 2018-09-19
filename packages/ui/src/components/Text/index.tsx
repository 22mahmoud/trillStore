import * as React from "react";
import { ITextProps } from "./types";
import { T } from "./style";

export const Text = ({ children, ...rest }: ITextProps) => (
  <T {...rest}> {children} </T>
);
