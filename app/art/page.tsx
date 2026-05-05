import type { Metadata } from 'next';
import Link from 'next/link';
import { artworks } from '../../features/art/artworks';

export const metadata: Metadata = {
  title: 'Art | Pocket7878.com',
  description: 'p5.jsなどによるインタラクティブ作品',
};

const Art = () => {
  return (
    <article className='mx-auto flex max-w-5xl flex-col gap-10'>
      <h1 className='text-2xl font-bold'>Art</h1>
      <div className='grid gap-4 sm:grid-cols-2 lg:grid-cols-3'>
        {artworks.map((artwork) => (
          <Link
            key={artwork.slug}
            href={`/art/${artwork.slug}`}
            className='rounded-lg border border-gray-200 px-5 py-4 text-lg font-medium no-underline transition-colors duration-300 hover:border-blue-500 hover:text-blue-500 focus:border-blue-500 focus:text-blue-500 active:border-blue-500 active:text-blue-500'>
            {artwork.title}
          </Link>
        ))}
      </div>
    </article>
  );
};

export default Art;
