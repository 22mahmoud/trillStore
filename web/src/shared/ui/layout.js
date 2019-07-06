import styled, { css } from 'styled-components';
import { mobile, phone } from './utils/media';

export const DIV = styled('div')`
  ${({
    padding, margin, width, maxWidth, maxHeight,
  }) => css`
    padding: ${padding};
    max-height: ${maxHeight};
    margin: ${margin};
    width: ${width};
    max-width: ${maxWidth};
  `};
`;

export const Container = styled(DIV)`
  display: flex;
  ${({ dir, justify, align }) => css`
    flex-direction: ${dir};
    justify-content: ${justify};
    align-items: ${align};
  `};
`;

export const Grid = styled(DIV)`
  display: grid;
  grid-template-columns: ${p => p.tempColumns.desktop};
  grid-gap: ${p => p.gridGap};
  grid-column-gap: 12px;
  ${mobile(css`
    grid-template-columns: ${p => p.tempColumns.mobile};
  `)};
  ${phone(css`
    grid-template-columns: ${p => p.tempColumns.phone};
  `)};
`;

/*
screens: {
  'tablet': '576px',
  // => @media (min-width: 576px) { ... }

  'laptop': '992px',
  // => @media (min-width: 992px) { ... }

  'desktop': '1200px',
  // => @media (min-width: 1200px) { ... }
},


use


@media (min-width: 576px) {
  .tablet\:bg-red { background-color: config('colors.red'); }
}

@media (min-width: 992px) {
  .laptop\:bg-red { background-color: config('colors.red'); }
}

@media (min-width: 1200px) {
  .desktop\:bg-red { background-color: config('colors.red'); }
}

*/
