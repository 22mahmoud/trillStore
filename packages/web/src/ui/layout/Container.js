import React from 'react';
import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';

import { flexJustifyAndAlignment, getMargin, getPadding } from '../utils';

const containerCss = props => css`
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
  ${props => containerCss(props)};
`;

const Container = ({
  m,
  mx,
  my,
  mt,
  mb,
  ml,
  mr,
  p,
  px,
  py,
  pt,
  pb,
  pl,
  pr,
  height,
  color,
  bg,
  display,
  dir,
  justify,
  align,
  ...rest
}) => (
  <C
    m={m}
    mx={mx}
    my={my}
    mt={mt}
    mb={mb}
    ml={ml}
    mr={mr}
    p={p}
    px={px}
    py={py}
    pt={pt}
    pb={pb}
    pl={pl}
    pr={pr}
    height={height}
    color={color}
    bg={bg}
    display={display}
    dir={dir}
    justify={justify}
    align={align}
  >
    {rest.children}
  </C>
);

Container.propTypes = {
  m: PropTypes.number,
  mx: PropTypes.number,
  my: PropTypes.number,
  mt: PropTypes.number,
  mb: PropTypes.number,
  ml: PropTypes.number,
  mr: PropTypes.number,
  p: PropTypes.number,
  px: PropTypes.number,
  py: PropTypes.number,
  pt: PropTypes.number,
  pb: PropTypes.number,
  pl: PropTypes.number,
  pr: PropTypes.number,
  height: PropTypes.number,
  color: PropTypes.string,
  bg: PropTypes.string,
  display: PropTypes.string,
  dir: PropTypes.string,
  justify: PropTypes.string,
  align: PropTypes.string,
};

export default Container;
