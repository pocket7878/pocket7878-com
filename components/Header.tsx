import Link from 'next/link';
import React, { memo } from 'react';
import styled from "styled-components";

export const Header = memo(function Header() {
  return (
    <Nav>
      <MenuItem><Link href="/">Top</Link></MenuItem>
      <MenuItem><Link href="/playground">Playground</Link></MenuItem>
    </Nav>
  );
});

const Nav = styled.nav`
	display: flex;
	flex-direction: row;
	justify-content: flex-end;
	border-bottom: 1px solid #eaeaea;
	position: fixed;
	width: 100%;
	top: 0px;
	background: white;
	height: 48px;
	z-index: 999;
`;

const MenuItem = styled.div`
	height: 100%;
	vertical-align: middle;
	padding: 16px;
	font-size: 16px;
	line-height: 16px;
`;