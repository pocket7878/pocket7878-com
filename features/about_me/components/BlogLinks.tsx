import { LinkCard } from '../../../components/LinkCard';
import { LinksWrapper } from '../../../components/LinksWrapper';

export const BlogLinks = () => {
  return (
    <article>
      <h2 className='text-xl font-bold'>Blogs</h2>
      <div className='mt-4 flex flex-col gap-2'>
        <section>
          <LinksWrapper>
            <LinkCard
              href='https://poketo7878-dev.hatenablog.com/'
              title='Let&lsquo;s write β'
              description='エンジニアリング・チームづくり関連のブログ'
            />
            <LinkCard
              href='https://no-logic.hatenablog.jp/'
              title='NO LOGIC'
              description='写真ブログ'
            />
          </LinksWrapper>
        </section>
        <section>
          <h3 className='text-lg font-bold'>Other blogs</h3>
          <section className='mt-2'>
            Azit inc.のコーポレートブログに投稿した内容です。
            <AzitBlogLinks />
          </section>
        </section>
      </div>
    </article>
  );
};

const AzitBlogLinks = () => {
  const links = [
    {
      date: '2022-06-16',
      title: '複雑な事業ドメインをプロダクトで扱うためのチームでの取り組み',
      href: 'https://love-from.azit.co.jp/article/ddd',
    },
    {
      date: '2022-07-22',
      title:
        'フルリモートチームで開発を円滑に進めるための要求仕様書の進化の変遷',
      href: 'https://love-from.azit.co.jp/article/requiredspecifications',
    },
    {
      date: '2022-09-05',
      title: 'CREW Expressを支える技術スタック',
      href: 'https://love-from.azit.co.jp/article/technologystack',
    },
    {
      date: '2024-12-05',
      title:
        'DeliveryXのWebフロントエンドでのFeatureアーキテクチャ導入の背景と実践',
      href: 'https://love-from.azit.co.jp/article/deliveryx-web-front-feature-arch',
    },
    {
      date: '2025-01-24',
      title:
        'RBSの導入をすすめて、モジュラモノリスバックエンドの保守性を高める',
      href: 'https://love-from.azit.co.jp/article/backend-rbs-modular-monolith',
    },
  ];

  return (
    <ul className='list-inside list-disc'>
      {links.map((link) => (
        <li key={link.href}>
          {link.date}:{' '}
          <a href={link.href} className='underline hover:text-blue-600'>
            {link.title}
          </a>
        </li>
      ))}
    </ul>
  );
};
