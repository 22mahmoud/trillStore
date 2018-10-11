import { Link as L } from 'react-router-dom';
import styled from 'styled-components';

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
  border: none;
  border-bottom: 2px solid #446084;

  :focus {
    outline: none;
  }
`;
