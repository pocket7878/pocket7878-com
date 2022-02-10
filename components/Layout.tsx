import React, { memo } from 'react';
import styled from 'styled-components';
import { Header } from './Header';

type Props = {
  children: React.ReactNode;
};

export const Layout = memo(function Layout({ children }: Props) {
  return (
    <div>
      <Header />
      <Wrapper>{children}</Wrapper>
    </div>
  );
});

const Wrapper = styled.div`
	padding-top: 48px;
`;
