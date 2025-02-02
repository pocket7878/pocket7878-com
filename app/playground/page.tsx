import type { Metadata } from 'next';
import { GitHubLinkPlaygroundCard } from '../../components/GitHubLinkPlaygroundCard';
import { LinksWrapper } from '../../components/LinksWrapper';

export const metadata: Metadata = {
  title: 'Pocket7878.com/Playground',
  description: 'pocket7878 portfolio',
};

const Playground = () => {
  return (
    <>
      <h1 className='text-2xl font-bold'>Playground</h1>
      <article className='mt-4 flex flex-col gap-8'>
        今まで作ってきた趣味プロジェクト・ライブラリ等のまとめ
        <section>
          <h2 className='mb-2 text-xl font-bold'>Mobile</h2>
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
          <h2 className='mb-2 text-xl font-bold'>Web Front</h2>
          <LinksWrapper>
            <GitHubLinkPlaygroundCard
              repoName='spa-login-learning-frontend'
              description='Next.jsのSPAから、Auth0の認証をしてバックエンドと通信するサンプル'
            />
          </LinksWrapper>
        </section>
        <section>
          <h2 className='mb-2 text-xl font-bold'>Server Side</h2>
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
          <h2 className='mb-2 text-xl font-bold'>Game</h2>
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
          <h2 className='mb-2 text-xl font-bold'>Low-Level</h2>
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
          <h2 className='mb-2 text-xl font-bold'>Algorithm</h2>
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
          <h2 className='mb-2 text-xl font-bold'>Other</h2>
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
    </>
  );
};

export default Playground;
