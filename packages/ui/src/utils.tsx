import { css } from "styled-components";

export const flexJustifyAndAlignment = (word: string) => {
  switch (word) {
    case "center":
      return "center";
    case "between":
      return "space-between";
    case "around":
      return "space-around";
    case "end":
      return "flex-end";
    case "start":
      return "flex-start";
    default:
      return null;
  }
};

export const getEm = (px: number = 0): number => px / 16;

const getSpacing = (
  all: number,
  x: number,
  y: number,
  t: number,
  b: number,
  r: number,
  l: number
) => {
  let yEm;
  let xEm;

  if (all) {
    return `${getEm(all)}em`;
  }

  if (y) {
    yEm = getEm(y);
  }
  if (x) {
    xEm = getEm(x);
  }
  return `${y ? yEm : getEm(t)}em
    ${x ? xEm : getEm(r)}em 
    ${y ? yEm : getEm(b)}em 
    ${x ? xEm : getEm(l)}em`;
};

interface IMargin {
  m: number;
  mx: number;
  my: number;
  mt: number;
  mb: number;
  mr: number;
  ml: number;
}

export const getMargin = ({ m, mx, my, mt, mb, mr, ml }: IMargin) => {
  if (m || mx || my || mt || mb || mr || ml) {
    return css`
      margin: ${getSpacing(m, mx, my, mt, mb, mr, ml)};
    `;
  }
  return null;
};

interface IPadding {
  p: number;
  px: number;
  py: number;
  pt: number;
  pb: number;
  pr: number;
  pl: number;
}

export const getPadding = ({ p, px, py, pt, pb, pr, pl }: IPadding) => {
  if (p || px || py || pt || pb || pr || pl) {
    return css`
      padding: ${getSpacing(p, px, py, pt, pb, pr, pl)};
    `;
  }
  return null;
};
