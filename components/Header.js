import React from 'react';
import Link from 'next/link';
import styled from 'styled-components';

const Nav = styled.nav`
  display: flex;
  align-items: center;
  height: 80px;
  border-bottom: 1px solid ${props => props.theme.black};
  border-top: 1px solid ${props => props.theme.black};
`;

const HeaderLink = styled.a`
  font-size: 20px;
  font-family: ${props => props.theme.header};
  color: ${props => props.theme.black};
  border: 1px solid ${props => props.theme.black};
  margin: 0 20px;
  padding: 5px;
  text-decoration: none;
  cursor: pointer;
  transition: color 0.1s linear, border-color 0.1s linear;

  &:hover {
    color: ${props => props.theme.primary};
    border-color: ${props => props.theme.primary};
  }
`;

const Header = () => (
  <Nav>
    <Link prefetch href="/">
      <HeaderLink>home</HeaderLink>
    </Link>
    <Link prefetch href="/article">
      <HeaderLink>article</HeaderLink>
    </Link>
  </Nav>
);

export default Header;
