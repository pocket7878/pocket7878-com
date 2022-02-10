import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';
import styled from 'styled-components';

const Playground: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Pocket7878.com/Playground</title>
        <meta name='description' content='pocket7878 portfolio' />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <Main>
        <h1>Playground</h1>
        <article>
          <LinksWrapper>
            <LinkCard>
              <h2>TBD</h2>
              <p>TBD...</p>
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

export default Playground;

const Main = styled.main`
  min-height: 100vh;
`;

const LinksWrapper = styled.div`
  display: flex;
  flex-flow: row wrap;
`;

const LinkCard = styled.a`
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
