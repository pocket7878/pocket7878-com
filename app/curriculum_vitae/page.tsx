import { Metadata } from 'next';
import Image from 'next/image';
import {
  BaseInformation,
  EducationalBackground,
  NaturalLanguage,
  SelfIntroduction,
  Skills,
  WorkExperience,
} from '../../features/curriculum_vitae';

export const metadata: Metadata = {
  title: 'Pocket7878.com/Curriculum Vitae',
  description: 'pocket7878 portfolio',
};

const Home = () => {
  return (
    <>
      <h1 className='text-2xl font-bold'>職務経歴書</h1>
      <article className='mt-4'>
        <div className='flex flex-col gap-8'>
          <section>
            <Image
              src='/prof_img.jpg'
              alt='Profile image'
              width={300}
              height={300}
              style={{
                maxWidth: '100%',
                height: 'auto',
              }}
            />
          </section>
          <SelfIntroduction />
          <BaseInformation />
          <NaturalLanguage />
          <Skills />
          <WorkExperience />
          <EducationalBackground />
        </div>
      </article>
    </>
  );
};

export default Home;
