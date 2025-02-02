import { Metadata } from 'next';
import { BlogLinks, Profile, SocialLinks } from '../features/about_me';

export const metadata: Metadata = {
  title: 'Pocket7878.com',
  description: 'pocket7878 portfolio',
};

const Home = () => {
  return (
    <>
      <h1 className='text-2xl font-bold'>About me</h1>
      <div className='mt-4 flex flex-col gap-8'>
        <Profile />
        <SocialLinks />
        <BlogLinks />
      </div>
    </>
  );
};

export default Home;
