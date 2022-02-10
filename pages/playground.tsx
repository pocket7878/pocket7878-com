import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import styled from 'styled-components';
import { GitHubLinkPlaygroundCard } from '../components/GitHubLinkPlaygroundCard';
import { LinksWrapper } from '../components/LinksWrapper';
import styles from '../styles/Home.module.css';

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
          <section>
            <h2>Mobile</h2>
            <LinksWrapper>
              <GitHubLinkPlaygroundCard
                title='reduxy'
                description='Android向けのRedux風アーキテクチャ'
                url='https://github.com/pocket7878/reduxy'
              />
              <GitHubLinkPlaygroundCard
                title='switcherView'
                description='Android向けのトグルスイッチ風UIコンポーネント'
                url='https://github.com/pocket7878/switcherView'
              />
            </LinksWrapper>
          </section>
          <section>
            <h2>Server Side</h2>
            <LinksWrapper>
              <GitHubLinkPlaygroundCard
                title='groute'
                description='Google DistanceMatrix, Directions等のAPIのラッパー'
                url='https://github.com/azitinc/groute'
              />
              <GitHubLinkPlaygroundCard
                title='aws-lambda-vim-layer'
                description='VimScriptでAWS Lambdaを記述するためのレイヤー'
                url='https://github.com/pocket7878/aws-lambda-vim-layer'
              />
            </LinksWrapper>
          </section>
          <section>
            <h2>Other</h2>
            <LinksWrapper>
              <GitHubLinkPlaygroundCard
                title='bevy_sample_stg'
                description='Rustのゲームエンジンbevyの学習のために作成しているシューティングゲーム'
                url='https://github.com/pocket7878/bevy_sample_stg'
              />
              <GitHubLinkPlaygroundCard
                title='alns-rs'
                description='配車最適化問題のヒューリスティックアルゴリズムALNSのRust実装'
                url='https://github.com/pocket7878/alns-rs'
              />
              <GitHubLinkPlaygroundCard
                title='minicpu'
                description='FPGA DE0-CV上にMIPS互換のCPUする学習'
                url='https://github.com/pocket7878/minicpu'
              />
              <GitHubLinkPlaygroundCard
                title='compiling-functional-language-go'
                description='Golangで純粋関数型言語のVM(G-Machine)'
                url='https://github.com/pocket7878/compiling-functional-language-using-go'
              />
              <GitHubLinkPlaygroundCard
                title='afz'
                description='Plan9のエディタ acmeのためのFuzzy finder'
                url='https://github.com/pocket7878/afz'
              />
              <GitHubLinkPlaygroundCard
                title='ec'
                description='Plan9のエディタacmeとsamから影響を受けたmacOS向けテキストエディタ'
                url='https://github.com/pocket7878/ec'
              />
              <GitHubLinkPlaygroundCard
                title='kebab'
                description='Common Lispで文字列をPascalCase, camelCase, snake_case, kebab-case変換するライブラリ'
                url='https://github.com/pocket7878/kebab'
              />
              <GitHubLinkPlaygroundCard
                title='my-sat'
                description='HaskellでSATソルバーを実装してみる学習'
                url='https://github.com/pocket7878/my-sat'
              />
              <GitHubLinkPlaygroundCard
                title='generalized-lr'
                description='Haskellで一般化LR法の実装'
                url='https://github.com/pocket7878/generalized-lr'
              />
              <GitHubLinkPlaygroundCard
                title='mini-reg'
                description='Haskellで正規表現エンジンの実装'
                url='https://github.com/pocket7878/mini-reg'
              />
            </LinksWrapper>
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

export default Playground;

const Main = styled.main`
  min-height: 100vh;
`;
