import React from 'react';
import styled from 'styled-components';
import { DIV, Container } from '../../shared/ui/layout';
import rem from '../../shared/ui/utils/rem';
import {
  H5, P, Button, Link,
} from '../../shared/ui/components';

const Wrapper = styled(Container)`
  padding: ${rem(12)};
  border-radius: ${rem(8)};
  box-shadow: 0px 2px 20px rgba(0, 0, 0, 0.05);
`;

const ImageWrapper = styled(DIV)`
  padding: ${rem(15)};
  max-height: ${rem(235)};
  height: auto;
`;

const Image = styled('img')`
  width: 100%;
  object-fit: cover;
  background: red;
`;

const Body = styled(DIV)`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const BodyContent = styled(DIV)`
  display: flex;
  flex-direction: column;
`;

const Price = styled(H5)`
  color: #ffc700;
  font-weight: bold;
`;

const ProductCard = ({ product: { name, price } }) => (
  <Wrapper dir="column">
    <ImageWrapper>
      <Link to="/">
        <Image
          alt={name}
          src="https://media.sweetwater.com/api/i/f-webp__q-82__ha-1cd0e7e9ac70444a__hmac-061387b0183e1c6c6503df2ec15a8478d04a1501/images/items/750/StratCHSSBKM-large.jpg.auto.webp"
        />
      </Link>
    </ImageWrapper>
    <Body>
      <BodyContent>
        <Link to="/" color="black">
          <P>{name}</P>
        </Link>
        <Price>{`$${price}`}</Price>
      </BodyContent>
      <BodyContent>
        <Button>Add to cart</Button>
      </BodyContent>
    </Body>
  </Wrapper>
);
export default ProductCard;
