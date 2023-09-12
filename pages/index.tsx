import { faSpeakerDeck } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import styled from 'styled-components';
import { LinkCard } from '../components/LinkCard';
import { LinksWrapper } from '../components/LinksWrapper';
import styles from '../styles/Home.module.css';

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Pocket7878.com</title>
        <meta name='description' content='pocket7878 portfolio' />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <Main>
        <h1>About me</h1>
        <article>
          <h2>Pocket7878</h2>
          <Image
            src='/prof_img.jpg'
            alt='Profile image'
            width={300}
            height={245}
          />
          <section>
            <HightLightedLink href='https://azit.co.jp/'>
              Azit Inc.
            </HightLightedLink>{' '}
            共同創業者・CTO
            <br />
            趣味で草花の写真を撮るために遠くに散歩にいったりします。
          </section>
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
          <SocicalLinkIcon href='https://www.instagram.com/pocket7878'>
            <Image
              src='/instagram_logo.png'
              alt='Instagram Logo'
              width={32}
              height={32}
            />
          </SocicalLinkIcon>
          <SocicalLinkIcon href='https://qiita.com/pocket7878'>
            <Image
              src='/qiita_icon.png'
              alt='Qiita Icon'
              width={32}
              height={32}
            />
          </SocicalLinkIcon>
          <SocicalLinkIcon href='https://zenn.dev/pocket7878'>
            <Image src='/zenn.svg' alt='Zenn Logo' width={32} height={32} />
          </SocicalLinkIcon>
          <SocicalLinkIcon href='https://speakerdeck.com/pocket7878'>
            <FontAwesomeIcon icon={faSpeakerDeck} width={32} height={32} />
          </SocicalLinkIcon>
          <SocicalLinkIcon href='https://note.com/pocket7878'>
            <Image
              src='/note_logo.svg'
              alt='Note Logo'
              width={32}
              height={32}
            />
          </SocicalLinkIcon>
        </article>
        <article>
          <h2>Blogs</h2>
          <LinksWrapper>
            <LinkCard href='https://poketo7878-dev.hatenablog.com/'>
              <h2>Let&lsquo;s write β</h2>
              <p>エンジニアリング・チームづくり関連のブログ</p>
            </LinkCard>

            <LinkCard href='https://no-logic.hatenablog.jp/'>
              <h2>NO LOGIC</h2>
              <p>写真ブログ</p>
            </LinkCard>
          </LinksWrapper>
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

const SocicalLinkIcon = styled.a`
  margin-right: 1rem;
`;
