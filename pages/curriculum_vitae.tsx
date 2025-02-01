import type { NextPage } from 'next';
import Head from 'next/head';
import Image from "next/legacy/image";
import styled from 'styled-components';
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
        <h1>職務経歴書</h1>
        <article>
          <Image
            src='/prof_img.jpg'
            alt='Profile image'
            width={300}
            height={245}
          />
          <section>
            <h2>自己紹介</h2>
            <hr />
            <p>
              2013年に株式会社Azitを共同創業してから、幅広くプロダクト開発を担当しています。
              <br />
              2021年からはCTOになり、サーバーサイドの開発、技術戦略の立案ならびに実行、エンジニア採用等を担当しています。
              <br />
              普段は散歩や植物観察、写真が好きで長時間散歩をしたり、植物園に行って花の写真を撮ったりしています。
            </p>
            <p>
              小学生時代にコンピュータに触れてプログラミングにはまり、以来ソフトウェア開発を続けています。
              <br />
              学生時代は主にコンパイラやGCアルゴリズム、自然言語処理等、低レイヤー寄りの事に興味があり学習していました。
              <br />
              大学時代に出会った友人たちと学生時代にプロダクトの開発をしており、そのまま大学卒業と同時に2013年に株式会社Azitを共同創業し、
              <br />
              以来モバイル・Webフロント・インフラ・バックエンド・データ分析等幅広く技術面にコミットしていましたが、
              <br />
              2021年からはCTOとして、サーバサイドの開発・技術戦略の立案ならびに実行、エンジニアの採用等を中心に担当しています。
              <br />
            </p>
          </section>
          <section>
            <h2>基本情報</h2>
            <hr />
            <BaseProfileTable>
              <tbody>
                <tr>
                  <td>氏名</td>
                  <td>十亀眞怜 (Sogame Masato)</td>
                </tr>
                <tr>
                  <td>email</td>
                  <td>
                    <a href='mailto:poketo7878@gmail.com'>
                      poketo7878@gmail.com
                    </a>
                  </td>
                </tr>
              </tbody>
            </BaseProfileTable>
          </section>
          <section>
            <h2>言語</h2>
            <hr />
            <ul>
              <li>日本語: ネイティブ</li>
              <li>
                英語:
                技術書や技術的な会話の読み書きが可能、会話も日常会話程度なら可能
              </li>
            </ul>
          </section>
          <section>
            <h2>スキル</h2>
            <hr />
            <h3>実務経験あり</h3>
            <ul>
              <li>
                Webアプリケーション, APIサーバー開発
                <ul>
                  <li>Ruby on Rails: 10年</li>
                  <li>Rust (AWS Lambda): 2年</li>
                </ul>
              </li>
              <li>
                Webフロントエンド開発
                <ul>
                  <li>TypeScript, React, Next.js: 3年</li>
                </ul>
              </li>
              <li>
                インフラ構築
                <ul>
                  <li>AWS: 7年</li>
                  <li>Terraform: 3年</li>
                </ul>
              </li>
              <li>
                CI/CD
                <ul>
                  <li>GitHub Actions</li>
                </ul>
              </li>
              <li>
                監視
                <ul>
                  <li>Sentry</li>
                  <li>Datadog</li>
                </ul>
              </li>
              <li>
                Androidアプリ開発
                <ul>
                  <li>Kotlin, Java: 3年 (5年以上前)</li>
                </ul>
              </li>
              <li>
                iOSアプリ開発
                <ul>
                  <li>Swift, Objective-C: 3年 (5年以上前)</li>
                </ul>
              </li>
              <li>
                データ分析
                <ul>
                  <li>SQL (MySQL, PostgreSQL): 5年</li>
                </ul>
              </li>
            </ul>
            <h3>趣味程度</h3>
            <ul>
              <li>Common Lisp: 5年</li>
              <li>Haskell: 3年</li>
              <li>Go: 半年以下の社内プロジェクト</li>
            </ul>
          </section>
          <section>
            <h2>職務経歴</h2>
            <hr />
            <h3>株式会社 Azit</h3>
            2013年 ~ 現在
            <br /> 共同創業者・2021年2月より同CTO 創業初期はRuby on Rails, AWS,
            iOS・Androidモバイルアプリ開発を幅広く担当
            <br />
            現在はAWS, Ruby on
            Railsバックエンド開発、配送ルート最適化エンジン開発(Rust),
            フロントエンド開発(React, Next.js)を担当
            <br />
          </section>
          <section>
            <h2>学歴</h2>
            <hr />
            慶應義塾大学 理工学部情報工学科 卒業
          </section>
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
  padding-bottom: 32px;
`;

const BaseProfileTable = styled.table`
  border-collapse: collapse;
  tr,
  td {
    border: 1px solid #c0c0c0;
  }

  tr:nth-child(odd) {
    background-color: #ffffff;
  }

  tr:nth-child(even) {
    background-color: #eeeeee;
  }

  td {
    padding: 8px;
  }
`;
