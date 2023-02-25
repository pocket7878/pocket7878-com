import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import styled from 'styled-components';
import styles from '../styles/Home.module.css';

type BotanicAlbum = {
  place_name: string;
  albums: Array<{ link: string; date: string }>;
};

const botanicAlbums: Array<BotanicAlbum> = [
  {
    place_name: '目黒緑道',
    albums: [
      {
        link: 'https://photos.app.goo.gl/BpJSebnyEKr43Syu8',
        date: '2019-05-19',
      },
      {
        link: 'https://photos.app.goo.gl/a8Hxtqw85gpy8UDR7',
        date: '2020-07-11',
      },
    ],
  },
  {
    place_name: '神代植物園',
    albums: [
      {
        link: 'https://photos.app.goo.gl/RiWnV1rEX1TzywhG6',
        date: '2019-05-25',
      },
      {
        link: 'https://no-logic.hatenablog.jp/entry/2023/02/25/193712',
        date: '2023-02-25',
      },
    ],
  },
  {
    place_name: '西郷山公園',
    albums: [
      {
        link: 'https://no-logic.hatenablog.jp/entry/2021/07/04/165102',
        date: '2021-07-04',
      },
    ],
  },
  {
    place_name: '新宿御苑',
    albums: [
      {
        link: 'https://no-logic.hatenablog.jp/entry/2021/11/13/175219',
        date: '2021-11-13',
      },
    ],
  },
  {
    place_name: '小石川植物園',
    albums: [
      {
        link: 'https://photos.app.goo.gl/ef4ypkzsVM2BNndB8',
        date: '2019-12-14',
      },
    ],
  },
  {
    place_name: '夢の島熱帯植物園',
    albums: [
      {
        link: 'https://no-logic.hatenablog.jp/entry/2023/02/23/195234',
        date: '2023-02-23',
      },
    ],
  },
  {
    place_name: '国立科学博物館附属自然教育園',
    albums: [
      {
        link: 'https://photos.app.goo.gl/8TwnzYb7YfqCHmjg6',
        date: '2021-04-10',
      },
      {
        link: 'https://no-logic.hatenablog.jp/entry/2021/11/03/182707',
        date: '2021-11-03',
      },
    ],
  },
  {
    place_name: '筑波実験植物園',
    albums: [
      {
        link: 'https://no-logic.hatenablog.jp/entry/2021/11/20/190149',
        date: '2021-11-20',
      },
    ],
  },
  {
    place_name: '小田原フラワーガーデン',
    albums: [
      {
        link: 'https://no-logic.hatenablog.jp/entry/2022/05/22/170452',
        date: '2022-05-22',
      },
    ],
  },
  {
    place_name: '箱根湿性花園',
    albums: [
      {
        link: 'https://no-logic.hatenablog.jp/entry/2022/06/12/201550',
        date: '2022-06-12',
      },
    ],
  },
  {
    place_name: '横浜イングリッシュガーデン',
    albums: [
      {
        link: 'https://no-logic.hatenablog.jp/entry/2022/06/04/161257',
        date: '2022-06-04',
      },
    ],
  },
];

const Botanic: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Pocket7878.com/Botainc</title>
        <meta name='description' content='pocket7878 portfolio' />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <Main>
        <h1>Botanic</h1>
        <article>
          {botanicAlbums.map((album, i) => {
            return (
              <section key={`album_section_${i}`}>
                <h2>{album.place_name}</h2>
                <ul>
                  {album.albums.map((album, j) => {
                    return (
                      <li key={`album_entry_${j}`}>
                        <a
                          href={album.link}
                          target='_blank'
                          rel='noopener noreferrer'>
                          {album.date}
                        </a>
                      </li>
                    );
                  })}
                </ul>
              </section>
            );
          })}
        </article>
      </Main>

      <footer className={styles.footer}>
        <a
          href='https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app'
          target='_blank'
          rel='noopener noreferrer'>
          Powered by{' '}
          <span className={styles.logo}>
            <Image src='/vercel.svg' alt='Vercel Logo' width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  );
};

export default Botanic;

const Main = styled.main`
  min-height: 100vh;
  margin-bottom: 24px;
`;
