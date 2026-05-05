import type { Metadata } from 'next';
import { GitHubProjectCard } from '../../components/GitHubProjectCard';
import { LinksWrapper } from '../../components/LinksWrapper';

export const metadata: Metadata = {
  title: 'Projects | Pocket7878.com',
  description: 'pocket7878 portfolio',
};

const Projects = () => {
  return (
    <>
      <h1 className='text-2xl font-bold'>Projects</h1>
      <article className='mt-4 flex flex-col gap-8'>
        今まで作ってきた趣味プロジェクト・ライブラリ等のまとめ
        <section>
          <h2 className='mb-2 text-xl font-bold'>Mobile</h2>
          <LinksWrapper>
            <GitHubProjectCard
              repoName='reduxy'
              description='Android向けのRedux風アーキテクチャ'
            />
            <GitHubProjectCard
              repoName='switcherView'
              description='Android向けのトグルスイッチ風UIコンポーネント'
            />
            <GitHubProjectCard
              repoName='swift-ui-redux-like'
              description='Redux風のデータ管理でSwiftUIを使うサンプル'
            />
          </LinksWrapper>
        </section>
        <section>
          <h2 className='mb-2 text-xl font-bold'>Web Front</h2>
          <LinksWrapper>
            <GitHubProjectCard
              repoName='spa-login-learning-frontend'
              description='Next.jsのSPAから、Auth0の認証をしてバックエンドと通信するサンプル'
            />
          </LinksWrapper>
        </section>
        <section>
          <h2 className='mb-2 text-xl font-bold'>Server Side</h2>
          <LinksWrapper>
            <GitHubProjectCard
              repoName='rust-onion-example'
              description='Rust layered architecture example'
            />
            <GitHubProjectCard
              repoName='groute'
              description='Google DistanceMatrix, Directions等のAPIのラッパー'
              owner='azitinc'
            />
            <GitHubProjectCard
              repoName='aws-lambda-vim-layer'
              description='VimScriptでAWS Lambdaを記述するためのレイヤー'
            />
            <GitHubProjectCard
              repoName='spa-login-learning-backend'
              description='SPAでNext.jsのフロントエンドとAuth0で認証をして通信するサーバーサンプル'
            />
            <GitHubProjectCard
              repoName='go-ddd-learning'
              description='Go ClearnArchitecure + DDD example.'
            />
          </LinksWrapper>
        </section>
        <section>
          <h2 className='mb-2 text-xl font-bold'>Game</h2>
          <LinksWrapper>
            <GitHubProjectCard
              repoName='bevy_sample_stg'
              description='Rustのゲームエンジンbevyの学習のために作成しているシューティングゲーム'
            />
            <GitHubProjectCard
              repoName='bevy_bulletml'
              description='RustのゲームエンジンbevyでBulletMLを使うためのライブラリ'
            />
            <GitHubProjectCard
              repoName='bevy_bulletml_viewer'
              description='RustのゲームエンジンbevyでBulletMLを表示するサンプル'
            />
          </LinksWrapper>
        </section>
        <section>
          <h2 className='mb-2 text-xl font-bold'>Low-Level</h2>
          <LinksWrapper>
            <GitHubProjectCard
              repoName='nes-rs'
              description='Rustでファミコンエミュレータをつくってみる'
            />
            <GitHubProjectCard
              repoName='compiler-book-rs'
              description='『低レイヤを知りたい人のためのCコンパイラ作成入門』をM1 Mac上でRustで追ってみる'
            />
            <GitHubProjectCard
              repoName='minicpu'
              description='FPGA DE0-CV上にMIPS互換のCPUする学習'
            />
            <GitHubProjectCard
              repoName='compiling-functional-language-go'
              description='Golangで純粋関数型言語のVM(G-Machine)'
            />
          </LinksWrapper>
        </section>
        <section>
          <h2 className='mb-2 text-xl font-bold'>Algorithm</h2>
          <LinksWrapper>
            <GitHubProjectCard
              repoName='vec-reg'
              description='RustでVectorにたいして関数をつかって正規表現のようにマッチ判定ができるライブラリ'
            />
            <GitHubProjectCard
              repoName='alns-rs'
              description='配車最適化問題のヒューリスティックアルゴリズムALNSのRust実装'
            />
            <GitHubProjectCard
              repoName='my-sat'
              description='HaskellでSATソルバーを実装してみる学習'
            />
            <GitHubProjectCard
              repoName='generalized-lr'
              description='Haskellで一般化LR法の実装'
            />
            <GitHubProjectCard
              repoName='mini-reg'
              description='Haskellで正規表現エンジンの実装'
            />
          </LinksWrapper>
        </section>
        <section>
          <h2 className='mb-2 text-xl font-bold'>Other</h2>
          <LinksWrapper>
            <GitHubProjectCard
              repoName='tdd-book-go'
              description='『テスト駆動開発』をGo言語で追ってみる '
            />
            <GitHubProjectCard
              repoName='itermcolors2alacritty'
              description='iTermのカラーテーマをalacrittyの色設定に変換するCLI'
            />
            <GitHubProjectCard
              repoName='afz'
              description='Plan9のエディタ acmeのためのFuzzy finder'
            />
            <GitHubProjectCard
              repoName='ec'
              description='Plan9のエディタacmeとsamから影響を受けたmacOS向けテキストエディタ'
            />
            <GitHubProjectCard
              repoName='kebab'
              description='Common Lispで文字列をPascalCase, camelCase, snake_case, kebab-case変換するライブラリ'
            />
          </LinksWrapper>
        </section>
      </article>
    </>
  );
};

export default Projects;
