import Link from 'next/link';
import React, { memo } from 'react';
import styled from 'styled-components';

export const Header = memo(function Header() {
  return (
    <Wrapper>
      <Title>
        <Link href='/'>Pocket7878 Portfolio</Link>
      </Title>
      <Nav>
        <MenuItem>
          <Link href='/'>About me</Link>
        </MenuItem>
        <MenuItem>
          <Link href='/playground'>Playground</Link>
        </MenuItem>
      </Nav>
    </Wrapper>
  );
});

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  border-bottom: 1px solid #eaeaea;
  position: fixed;
  width: 100%;
  top: 0px;
  background: white;
  height: 48px;
  z-index: 999;
`;

const Title = styled.div`
  flex-grow: 2;
  padding: 16px;
  font-size: 16px;
  line-height: 16px;
  font-weight: bold;
`;

const Nav = styled.nav`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  background: white;
  height: 100%;
`;

const MenuItem = styled.div`
  height: 100%;
  vertical-align: middle;
  padding: 16px;
  font-size: 16px;
  line-height: 16px;
`;
