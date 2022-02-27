import { faBars } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Link from 'next/link';
import React, { memo, useCallback, useState } from 'react';
import styled from 'styled-components';

export const Header = memo(function Header() {
  const [menuOpend, setMenuOpened] = useState(false);
  const handleMenuTogglerClicked = useCallback(() => {
    setMenuOpened(!menuOpend);
  }, [menuOpend]);

  const handleMenuLinkClicked = useCallback(() => {
    setMenuOpened(false);
  }, []);

  return (
    <Wrapper>
      <Title>
        <Link href='/'>Pocket7878 Portfolio</Link>
      </Title>
      <MenuToggler onClick={handleMenuTogglerClicked}>
        <FontAwesomeIcon icon={faBars} height={16} />
      </MenuToggler>
      <Nav menuOpened={menuOpend}>
        <MenuItem onClick={handleMenuLinkClicked}>
          <Link href='/'>About me</Link>
        </MenuItem>
        <MenuItem onClick={handleMenuLinkClicked}>
          <Link href='/playground'>Playground</Link>
        </MenuItem>
      </Nav>
    </Wrapper>
  );
});

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
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
  z-index: 998;
`;

const MenuToggler = styled.div`
  height: 48px;
  width: 48px;
  padding: 16px;
  cursor: pointer;

  @media only screen and (min-width: 768px) {
    display: none;
  }
`;

const Nav = styled.nav<{ menuOpened: boolean }>`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  background: white;
  height: 100%;

  @media only screen and (max-width: 768px) {
    flex-direction: column;
    height: unset;
    width: 100%;
    position: relative;
    display: ${({ menuOpened }) => (menuOpened ? 'flex' : 'none')};
  }
`;

const MenuItem = styled.div`
  height: 100%;
  vertical-align: middle;
  padding: 16px;
  font-size: 16px;
  line-height: 16px;
  z-index: 997;

  @media only screen and (max-width: 768px) {
    padding: 0px;
    a {
      width: 100%;
      display: block;
      height: 48px;
      padding: 16px;
      border-bottom: 1px solid #eaeaea;
    }
  }
`;
