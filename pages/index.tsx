import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';
import styled from 'styled-components';

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Pocket7878.com</title>
        <meta name='description' content='pocket7878 portfolio' />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <Main>
        <h1>Pocket7878 Portfolio</h1>
        <Image src='/prof_img.png' alt='GitHub Logo' width={128} height={128} />
        <article>
          <h2>About me</h2>
          <HightLightedLink href='https://azit.co.jp/'>
            Azit Inc.
          </HightLightedLink>
          でCTOをしています。
          <br />
          趣味で草花の写真を撮るために遠くに散歩にいったりします。
        </article>
        <article>
          <h2>Links</h2>
          <SocicalLinkIcon href='https://github.com/pocket7878'>
            <Image
              src='/github_logo.png'
              alt='GitHub Logo'
              width={32}
              height={32}
            />
          </SocicalLinkIcon>
          <SocicalLinkIcon href='https://twitter.com/Pocket7878'>
            <Image
              src='/twitter_logo.svg'
              alt='Twitter Logo'
              width={32}
              height={32}
            />
          </SocicalLinkIcon>
          <SocicalLinkIcon href='https://www.facebook.com/Pocket7878'>
            <Image
              src='/facebook_logo.png'
              alt='Facebook Logo'
              width={32}
              height={32}
            />
          </SocicalLinkIcon>
        </article>
        <article>
          <h2>Blogs</h2>
          <BlogLinkWrapper>
            <BlogLinkCard href='https://poketo7878-dev.hatenablog.com/'>
              <h2>Let&lsquo;s write β</h2>
              <p>エンジニアリング・チームづくり関連のブログ</p>
            </BlogLinkCard>

            <BlogLinkCard href='https://no-logic.hatenablog.jp/'>
              <h2>NO LOGIC</h2>
              <p>写真ブログ</p>
            </BlogLinkCard>
          </BlogLinkWrapper>
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

export default Home;

const Main = styled.main`
  min-height: 100vh;
`;

const HightLightedLink = styled.a`
  color: #0070f3;

  &:hover,
  &:focus,
  &:active {
    color: #0070f3;
    border-color: #0070f3;
  }
`;

const BlogLinkWrapper = styled.div`
  display: flex;
  flex-flow: row wrap;
`;

const BlogLinkCard = styled.a`
  margin-right: 1rem;
  margin-bottom: 1rem;
  padding: 1.5rem;
  text-align: left;
  color: inherit;
  text-decoration: none;
  border: 1px solid #eaeaea;
  border-radius: 10px;
  transition: color 0.15s ease, border-color 0.15s ease;
  flex-basis: 300px;
  min-height: 152px;

  &:hover,
  &:focus,
  &:active {
    color: #0070f3;
    border-color: #0070f3;
  }

  & h2 {
    margin: 0 0 1rem 0;
    font-size: 1.5rem;
  }

  & p {
    margin: 0;
    font-size: 1.25rem;
    line-height: 1.5;
  }
}
`;

const SocicalLinkIcon = styled.a`
  margin-right: 1rem;
`;
