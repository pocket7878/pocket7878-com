'use client';

import { faBars } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classnames from 'classnames';
import Link from 'next/link';
import { memo, useCallback, useState } from 'react';

export const Header = memo(function Header() {
  const [menuOpend, setMenuOpened] = useState(false);
  const handleMenuTogglerClicked = useCallback(() => {
    setMenuOpened(!menuOpend);
  }, [menuOpend]);

  const handleMenuLinkClicked = useCallback(() => {
    setMenuOpened(false);
  }, []);

  const menuItemClass =
    'p-0 md:p-4 align-middle h-full text-lg z-997 md:flex md:items-center';
  const menuLinkClass =
    'w-full md:w-auto block md:inline md:h-auto py-2 px-4 md:p-0 border-b md:border-0 border-solid border-gray-300';

  return (
    <header className='fixed top-0 right-0 left-0 z-999 flex h-11 w-full flex-row flex-wrap items-center border-b border-solid border-gray-200 bg-black text-white'>
      <div className='z-998 ml-4 flex-grow-2 text-sm font-bold'>
        <Link href='/' className='text-lg font-bold'>
          Pocket7878 Portfolio
        </Link>
      </div>
      <div
        className='flex size-10 cursor-pointer items-center md:hidden'
        onClick={handleMenuTogglerClicked}>
        <FontAwesomeIcon icon={faBars} height={16} />
      </div>
      <nav
        className={classnames(
          'relative w-full flex-col bg-black',
          menuOpend ? ['flex'] : ['hidden'],
          'md:static md:flex md:h-full md:w-auto md:flex-row md:justify-end'
        )}>
        <div className={menuItemClass} onClick={handleMenuLinkClicked}>
          <Link href='/' className={menuLinkClass}>
            About me
          </Link>
        </div>
        <div className={menuItemClass} onClick={handleMenuLinkClicked}>
          <Link href='/curriculum_vitae' className={menuLinkClass}>
            Curriculum Vitae
          </Link>
        </div>
        <div className={menuItemClass} onClick={handleMenuLinkClicked}>
          <Link href='/playground' className={menuLinkClass}>
            Playground
          </Link>
        </div>
      </nav>
    </header>
  );
});
