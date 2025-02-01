import type { NextPage } from 'next';
import Head from 'next/head';
import Image from "next/image";
import styled from 'styled-components';
import { GitHubLinkPlaygroundCard } from '../components/GitHubLinkPlaygroundCard';
import { LinksWrapper } from '../components/LinksWrapper';
import styles from '../styles/Home.module.css';

const Playground: NextPage = () => {
  return (
    (<div className={styles.container}>
      <Head>
        <title>Pocket7878.com/Playground</title>
        <meta name='description' content='pocket7878 portfolio' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Main>
        <h1>Playground</h1>
        今まで作ってきた趣味プロジェクト・ライブラリ等のまとめ
        <article>
          <section>
            <h2>Mobile</h2>
            <LinksWrapper>
              <GitHubLinkPlaygroundCard
                repoName='reduxy'
                description='Android向けのRedux風アーキテクチャ'
              />
              <GitHubLinkPlaygroundCard
                repoName='switcherView'
                description='Android向けのトグルスイッチ風UIコンポーネント'
              />
              <GitHubLinkPlaygroundCard
                repoName='swift-ui-redux-like'
                description='Redux風のデータ管理でSwiftUIを使うサンプル'
              />
            </LinksWrapper>
          </section>
          <section>
            <h2>Web Front</h2>
            <LinksWrapper>
              <GitHubLinkPlaygroundCard
                repoName='spa-login-learning-frontend'
                description='Next.jsのSPAから、Auth0の認証をしてバックエンドと通信するサンプル'
              />
            </LinksWrapper>
          </section>
          <section>
            <h2>Server Side</h2>
            <LinksWrapper>
              <GitHubLinkPlaygroundCard
                repoName='rust-onion-example'
                description='Rust layered architecture example'
              />
              <GitHubLinkPlaygroundCard
                repoName='groute'
                description='Google DistanceMatrix, Directions等のAPIのラッパー'
                owner='azitinc'
              />
              <GitHubLinkPlaygroundCard
                repoName='aws-lambda-vim-layer'
                description='VimScriptでAWS Lambdaを記述するためのレイヤー'
              />
              <GitHubLinkPlaygroundCard
                repoName='spa-login-learning-backend'
                description='SPAでNext.jsのフロントエンドとAuth0で認証をして通信するサーバーサンプル'
              />
              <GitHubLinkPlaygroundCard
                repoName='go-ddd-learning'
                description='Go ClearnArchitecure + DDD example.'
              />
            </LinksWrapper>
          </section>
          <section>
            <h2>Game</h2>
            <LinksWrapper>
              <GitHubLinkPlaygroundCard
                repoName='bevy_sample_stg'
                description='Rustのゲームエンジンbevyの学習のために作成しているシューティングゲーム'
              />
              <GitHubLinkPlaygroundCard
                repoName='bevy_bulletml'
                description='RustのゲームエンジンbevyでBulletMLを使うためのライブラリ'
              />
              <GitHubLinkPlaygroundCard
                repoName='bevy_bulletml_viewer'
                description='RustのゲームエンジンbevyでBulletMLを表示するサンプル'
              />
            </LinksWrapper>
          </section>
          <section>
            <h2>Low-Level</h2>
            <LinksWrapper>
              <GitHubLinkPlaygroundCard
                repoName='nes-rs'
                description='Rustでファミコンエミュレータをつくってみる'
              />
              <GitHubLinkPlaygroundCard
                repoName='compiler-book-rs'
                description='『低レイヤを知りたい人のためのCコンパイラ作成入門』をM1 Mac上でRustで追ってみる'
              />
              <GitHubLinkPlaygroundCard
                repoName='minicpu'
                description='FPGA DE0-CV上にMIPS互換のCPUする学習'
              />
              <GitHubLinkPlaygroundCard
                repoName='compiling-functional-language-go'
                description='Golangで純粋関数型言語のVM(G-Machine)'
              />
            </LinksWrapper>
          </section>
          <section>
            <h2>Algorithm</h2>
            <LinksWrapper>
              <GitHubLinkPlaygroundCard
                repoName='vec-reg'
                description='RustでVectorにたいして関数をつかって正規表現のようにマッチ判定ができるライブラリ'
              />
              <GitHubLinkPlaygroundCard
                repoName='alns-rs'
                description='配車最適化問題のヒューリスティックアルゴリズムALNSのRust実装'
              />
              <GitHubLinkPlaygroundCard
                repoName='my-sat'
                description='HaskellでSATソルバーを実装してみる学習'
              />
              <GitHubLinkPlaygroundCard
                repoName='generalized-lr'
                description='Haskellで一般化LR法の実装'
              />
              <GitHubLinkPlaygroundCard
                repoName='mini-reg'
                description='Haskellで正規表現エンジンの実装'
              />
            </LinksWrapper>
          </section>
          <section>
            <h2>Other</h2>
            <LinksWrapper>
              <GitHubLinkPlaygroundCard
                repoName='tdd-book-go'
                description='『テスト駆動開発』をGo言語で追ってみる '
              />
              <GitHubLinkPlaygroundCard
                repoName='itermcolors2alacritty'
                description='iTermのカラーテーマをalacrittyの色設定に変換するCLI'
              />
              <GitHubLinkPlaygroundCard
                repoName='afz'
                description='Plan9のエディタ acmeのためのFuzzy finder'
              />
              <GitHubLinkPlaygroundCard
                repoName='ec'
                description='Plan9のエディタacmeとsamから影響を受けたmacOS向けテキストエディタ'
              />
              <GitHubLinkPlaygroundCard
                repoName='kebab'
                description='Common Lispで文字列をPascalCase, camelCase, snake_case, kebab-case変換するライブラリ'
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
            <Image
              src='/vercel.svg'
              alt='Vercel Logo'
              width={72}
              height={16}
              style={{
                maxWidth: "100%",
                height: "auto"
              }} />
          </span>
        </a>
      </footer>
    </div>)
  );
};

export default Playground;

const Main = styled.main`
  min-height: 100vh;
  margin-bottom: 24px;
`;
