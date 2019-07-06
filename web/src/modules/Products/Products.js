import React, { useEffect, useState } from 'react';

import { productsService } from '../../api';
import Spinner from '../../shared/ui/spinner';
import { Grid, Container } from '../../shared/ui/layout';
import ProductCard from './ProductCard';

const Products = React.memo(() => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);

  async function fetchProducts() {
    setLoading(true);
    const res = await productsService.getProducts({ offset: 0 });
    setProducts(res);
    setLoading(false);
  }

  useEffect(() => {
    fetchProducts();
  }, []);

  if (loading) {
    return (
      <Container width="100%" margin="5em" justify="center">
        <Spinner color="#000" />
      </Container>
    );
  }

  return (
    <Grid
      width="100%"
      gridGap="1rem"
      tempColumns={{
        desktop: 'repeat(auto-fill, minmax(200px, 1fr))',
        mobile: 'repeat(auto-fill, minmax(200px, 1fr))',
        phone: 'repeat(auto-fit, minmax(100px, 1fr))',
      }}
    >
      {products.map(p => (
        <ProductCard key={p._id} product={p} />
      ))}
    </Grid>
  );
});

export default Products;
