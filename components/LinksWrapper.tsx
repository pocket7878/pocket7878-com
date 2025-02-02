import { PropsWithChildren } from 'react';

export const LinksWrapper = ({ children }: PropsWithChildren) => {
  return <div className='flex flex-row flex-wrap gap-4'>{children}</div>;
};
