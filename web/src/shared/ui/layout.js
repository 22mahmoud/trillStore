import styled, { css } from 'styled-components';

export const Container = styled('div')`
  display: flex;
  ${({ dir, justify, align }) => css`
    flex-direction: ${dir};
    justify-content: ${justify};
    align-items: ${align};
  `};
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
