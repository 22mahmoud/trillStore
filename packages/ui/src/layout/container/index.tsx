import * as React from "react";
import { IContainerProps } from "./types";
import { C } from "./style";

export const Container = ({ children, ...rest }: IContainerProps) => (
  <C {...rest}> {children} </C>
);
