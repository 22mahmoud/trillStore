import styled, { css } from 'styled-components';
import { Link as L } from 'react-router-dom';

export const Link = styled(L)`
  margin: 0 10px;
  text-decoration: none;
  color: ${p => p.color || '#fff'};
  position: relative;
  cursor: pointer;

  ::after {
    transition: all 0.2s cubic-bezier(0.41, 0.73, 0.41, 0.69);
    content: ' ';
    position: absolute;
    left: 0;
    bottom: 0;
    width: 0%;
    background-color: ${p => p.color || '#fff'};
    height: 3px;
  }

  :hover {
    ::after {
      width: 100%;
    }
  }
`;

export const Input = styled('input')`
  background: #fff;
  border: 1px solid #446084;
  padding: 10px;
  :focus {
    outline: none;
  }
`;

export const Button = styled('button')`
  border: none;
  padding: 4px;
  background: ${({ disabled }) => (disabled ? css`#a3a8af` : css`#446084`)};
  color: #fff;
  cursor: pointer;
`;
