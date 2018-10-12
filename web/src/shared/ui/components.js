import { Link as L } from 'react-router-dom';
import styled, { css } from 'styled-components';

export const Link = styled(L)`
  margin: 0 10px;
  text-decoration: none;
  color: #1b253e;
  position: relative;
  transition: all 0.8s ease;
  :hover {
    ::after {
      content: ' ';
      position: absolute;
      width: 100%;
      background-color: #446084;
      height: 3px;
    }
  }
`;

export const Input = styled('input')`
  border: 1px solid #446084;
  padding: 10px;
`;

export const Button = styled('button')`
  border: none;
  padding: 4px;
  background: ${({ disabled }) => (disabled ? css`#a3a8af` : css`#446084`)};
  color: #fff;
  cursor: pointer;
`;
