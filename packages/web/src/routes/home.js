import React from 'react';

import { Text, Container } from '@trillstore/ui';

const Home = () => (
  <Container display="flex" dir="row" align="center" justify="between" px={10}>
    <Text size={14} uppercase>
      free shippping over $100
    </Text>
    <Text size={14} uppercase>
      EGP
    </Text>
  </Container>
);

export default Home;
