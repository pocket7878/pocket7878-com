import { PropsWithChildren } from 'react';

type Props = {
  href: string;
};

export const SocialLinkIcon = ({
  href,
  children,
}: PropsWithChildren<Props>) => {
  return (
    <a href={href} className='mr-4'>
      {children}
    </a>
  );
};
