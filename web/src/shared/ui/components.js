import styled from 'styled-components';
import { Link as L } from 'react-router-dom';
import rem from './utils/rem';

export const Link = styled(L)`
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

export const Label = styled('label')`
  text-align: left;
  margin-bottom: 0.3rem;
`;

export const Input = styled('input')`
  background: #fff;
  border: ${p => (p.error ? '1px solid tomato' : `1px solid ${p.theme.colors.yellow}`)};
  border-radius: 4px;
  padding: 10px;

  :focus {
    outline: none;
  }
`;

export const Button = styled('button')`
  border: none;
  padding: 4px;
  background: ${({ disabled, theme }) => (disabled ? theme.colors.darkGray : theme.colors.yellow)};
  color: #fff;
  cursor: pointer;
`;

export const Absolute = styled('div')`
  position: absolute;
  top: 0;
  right: 0;
  height: 100%;
  margin-left: 1em;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export const Relative = styled('div')`
  position: relative;
`;

export const P = styled('p')`
  margin: ${rem(5)};
`;

export const H5 = styled('h5')`
  margin: ${rem(5)};
  line-height: 1.4;
`;
