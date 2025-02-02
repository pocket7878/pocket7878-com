import { AnchorHTMLAttributes } from 'react';

type Props = {
  title: string;
  description: string;
} & AnchorHTMLAttributes<HTMLAnchorElement>;

export const LinkCard = ({ title, description, ...anchorProps }: Props) => {
  return (
    <a
      {...anchorProps}
      className='min-h-38 w-80 rounded-lg border border-gray-200 p-6 text-left no-underline transition-colors duration-300 hover:border-blue-500 hover:text-blue-500 focus:border-blue-500 focus:text-blue-500 active:border-blue-500 active:text-blue-500'>
      <h2 className='mb-4 text-2xl font-medium'>{title}</h2>
      <p className='mt-0 text-sm leading-6 text-gray-500'>{description}</p>
    </a>
  );
};
