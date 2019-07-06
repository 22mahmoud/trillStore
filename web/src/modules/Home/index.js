import React from 'react';
import { Container } from '../../shared/ui/layout';
import Products from '../Products/Products';
import rem from '../../shared/ui/utils/rem';

const Home = () => (
  <Container padding={rem(15)}>
    <Products />
  </Container>
);

export default Home;
