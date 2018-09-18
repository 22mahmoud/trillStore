import { css } from 'styled-components';

const size = {
  medium: '800px',
  large: '1200px',
};

export const media = Object.keys(size).reduce((acc, key) => {
  acc[key] = style => `
    @media (min-width: ${size[key]}) {
      ${style};
    }
  `;
  return acc;
}, {});

export const flexJustifyAndAlignment = (word) => {
  switch (word) {
    case 'center':
      return 'center';
    case 'between':
      return 'space-between';
    case 'around':
      return 'space-around';
    case 'end':
      return 'flex-end';
    case 'start':
      return 'flex-start';
    default:
      return null;
  }
};

export const getEm = (px = 0) => px / 16;

const getSpacing = (all, x, y, t, b, r, l) => {
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

export const getMargin = ({
  m, mx, my, mt, mb, mr, ml,
}) => {
  if (m || mx || my || mt || mb || mr || ml) {
    return css`
      margin: ${getSpacing(m, mx, my, mt, mb, mr, ml)};
    `;
  }
  return null;
};

export const getPadding = ({
  p, px, py, pt, pb, pr, pl,
}) => {
  if (p || px || py || pt || pb || pr || pl) {
    return css`
      padding: ${getSpacing(p, px, py, pt, pb, pr, pl)};
    `;
  }
  return null;
};
