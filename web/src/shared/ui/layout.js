import styled, { css } from 'styled-components';

export const Container = styled('div')`
  display: flex;
  ${({ dir, justify, align }) => css`
    flex-direction: ${dir};
    justify-content: ${justify};
    align-items: ${align};
  `};
`;
