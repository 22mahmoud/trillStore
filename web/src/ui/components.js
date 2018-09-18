import styled from 'styled-components';

export const Text = styled.p`
  text-transform: ${({ uppercase, lowercase, capitalize }) => {
    if (uppercase && !lowercase && !capitalize) {
      return 'uppercase';
    }
    if (lowercase && !uppercase && !capitalize) {
      return 'lowercase';
    }
    if (capitalize && !lowercase && !uppercase) {
      return 'capitalize';
    }
    return null;
  }};
  font-weight: ${({ bold }) => bold && 'bold'};
  font-size: ${({ size }) => size && `${size / 16}em`};
`;
