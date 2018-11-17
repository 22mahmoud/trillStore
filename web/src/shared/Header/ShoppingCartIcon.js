import React from 'react';
import styled from 'styled-components';
import { ShoppingCart } from 'styled-icons/material/ShoppingCart';
import { Absolute, Relative } from '../ui/components';

const ShoppingCartI = styled(ShoppingCart)`
  color: #fff;
`;

const Circle = styled('div')`
  background: #000;
  color: #fff;
  width: 18px;
  height: 18px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
`;

const ShoppingCartIcon = ({ size = 30, ...rest }) => (
  <Relative {...rest}>
    <ShoppingCartI size={size} />
    <Absolute style={{ height: 0 }}>
      <Circle> 5 </Circle>
    </Absolute>
  </Relative>
);

export default ShoppingCartIcon;
