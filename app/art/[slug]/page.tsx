import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { artworks, getArtwork } from '../../../features/art/artworks';

type Props = {
  params: Promise<{
    slug: string;
  }>;
};

export const generateStaticParams = () => {
  return artworks.map((artwork) => ({
    slug: artwork.slug,
  }));
};

export const generateMetadata = async ({ params }: Props): Promise<Metadata> => {
  const { slug } = await params;
  const artwork = getArtwork(slug);

  if (!artwork) {
    return {
      title: 'Art | Pocket7878.com',
    };
  }

  return {
    title: `${artwork.title} | Pocket7878.com`,
    description: artwork.description,
  };
};

const ArtworkPage = async ({ params }: Props) => {
  const { slug } = await params;
  const artwork = getArtwork(slug);

  if (!artwork) {
    notFound();
  }

  return (
    <article className='mx-auto flex max-w-5xl flex-col gap-6'>
      <header className='flex flex-col gap-4'>
        <Link href='/art' className='text-sm text-gray-500 hover:text-blue-500'>
          Art
        </Link>
        <h1 className='text-3xl font-bold'>{artwork.title}</h1>
      </header>

      <section className='mx-auto w-full max-w-[600px] overflow-hidden rounded-lg'>
        <iframe
          title={artwork.title}
          src={artwork.iframeSrc}
          className='aspect-[5/4] w-full border-0'
          loading='eager'
        />
      </section>
    </article>
  );
};

export default ArtworkPage;
