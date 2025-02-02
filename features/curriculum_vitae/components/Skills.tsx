export const Skills = () => {
  return (
    <section>
      <h2 className='text-xl font-bold'>スキル</h2>
      <hr className='mb-4' />
      <h3 className='text-lg font-bold'>実務経験あり</h3>
      <ul className='my-4 ml-4 list-inside list-disc'>
        <li>
          Webアプリケーション, APIサーバー開発
          <ul className='ml-10 list-inside list-[circle]'>
            <li>Ruby on Rails: 10年</li>
            <li>Rust (AWS Lambda): 2年</li>
          </ul>
        </li>
        <li>
          Webフロントエンド開発
          <ul className='ml-10 list-inside list-[circle]'>
            <li>TypeScript, React, Next.js: 3年</li>
          </ul>
        </li>
        <li>
          インフラ構築
          <ul className='ml-10 list-inside list-[circle]'>
            <li>AWS: 7年</li>
            <li>Terraform: 3年</li>
          </ul>
        </li>
        <li>
          CI/CD
          <ul className='ml-10 list-inside list-[circle]'>
            <li>GitHub Actions</li>
          </ul>
        </li>
        <li>
          監視
          <ul className='ml-10 list-inside list-[circle]'>
            <li>Sentry</li>
            <li>Datadog</li>
          </ul>
        </li>
        <li>
          Androidアプリ開発
          <ul className='ml-10 list-inside list-[circle]'>
            <li>Kotlin, Java: 3年 (5年以上前)</li>
          </ul>
        </li>
        <li>
          iOSアプリ開発
          <ul className='ml-10 list-inside list-[circle]'>
            <li>Swift, Objective-C: 3年 (5年以上前)</li>
          </ul>
        </li>
        <li>
          データ分析
          <ul className='ml-10 list-inside list-[circle]'>
            <li>SQL (MySQL, PostgreSQL): 5年</li>
          </ul>
        </li>
      </ul>
      <h3 className='text-lg font-bold'>趣味程度</h3>
      <ul className='my-4 ml-4 list-inside list-disc'>
        <li>Common Lisp: 5年</li>
        <li>Haskell: 3年</li>
        <li>Go: 半年以下の社内プロジェクト</li>
      </ul>
    </section>
  );
};
