import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import styled from "styled-components"

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Pocket7878.com</title>
        <meta name="description" content="pocket7878 portfolio" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Main>
        <h1>
          Pocket7878 Portfolio
        </h1>
        <article>
          <h2>Blogs</h2>
          <BlogLinkWrapper>
            <BlogLinkCard>
              <h2>Let&lsquo;s write β</h2>
              <p>
                エンジニアリング・チームづくり関連のブログ
              </p>
            </BlogLinkCard>

            <BlogLinkCard>
              <h2>NO LOGIC</h2>
              <p>
                写真ブログ
              </p>
            </BlogLinkCard>
          </BlogLinkWrapper>
        </article>
      </Main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  )
}

export default Home

const Main = styled.main`
  min-height: 100vh;
`

const BlogLinkWrapper = styled.div`
  display: flex;
  flex-flow: row wrap;
`;

const BlogLinkCard = styled.div`
  margin-right: 1rem;
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

`