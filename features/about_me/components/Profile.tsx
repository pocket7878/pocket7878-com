import Image from 'next/image';

export const Profile = () => {
  return (
    <article>
      <h2 className='text-xl font-bold'>Pocket7878</h2>
      <section className='mt-4'>
        <Image
          src='/prof_img.jpg'
          alt='Profile image'
          width={300}
          height={245}
          style={{
            maxWidth: '100%',
            height: 'auto',
          }}
        />
        <section className='mt-2'>
          <a
            href='https://azit.co.jp/'
            className='underline hover:text-blue-600'>
            Azit Inc.
          </a>{' '}
          共同創業者・CTO
          <br />
          趣味で草花の写真を撮るために遠くに散歩にいったりします。
        </section>
      </section>
    </article>
  );
};
