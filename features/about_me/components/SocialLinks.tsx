/* SNS系へのリンク */
import { faSpeakerDeck } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Image from 'next/image';
import { SocialLinkIcon } from '../../../components/SocialLinkIcon';

export const SocialLinks = () => {
  return (
    <article>
      <h2 className='text-xl font-bold'>Links</h2>
      <div className='mt-4 flex flex-row'>
        <SocialLinkIcon href='https://github.com/pocket7878'>
          <Image
            src='/github_logo.png'
            alt='GitHub Logo'
            width={32}
            height={32}
            style={{
              maxWidth: '100%',
              height: 'auto',
            }}
          />
        </SocialLinkIcon>
        <SocialLinkIcon href='https://twitter.com/Pocket7878'>
          <Image
            src='/twitter_logo.svg'
            alt='Twitter Logo'
            width={32}
            height={32}
            style={{
              maxWidth: '100%',
              height: 'auto',
            }}
          />
        </SocialLinkIcon>
        <SocialLinkIcon href='https://www.facebook.com/Pocket7878'>
          <Image
            src='/facebook_logo.png'
            alt='Facebook Logo'
            width={32}
            height={32}
            style={{
              maxWidth: '100%',
              height: 'auto',
            }}
          />
        </SocialLinkIcon>
        <SocialLinkIcon href='https://www.instagram.com/pocket7878'>
          <Image
            src='/instagram_logo.png'
            alt='Instagram Logo'
            width={32}
            height={32}
            style={{
              maxWidth: '100%',
              height: 'auto',
            }}
          />
        </SocialLinkIcon>
        <SocialLinkIcon href='https://qiita.com/pocket7878'>
          <Image
            src='/qiita_icon.png'
            alt='Qiita Icon'
            width={32}
            height={32}
            style={{
              maxWidth: '100%',
              height: 'auto',
            }}
          />
        </SocialLinkIcon>
        <SocialLinkIcon href='https://zenn.dev/pocket7878'>
          <Image
            src='/zenn.svg'
            alt='Zenn Logo'
            width={32}
            height={32}
            style={{
              maxWidth: '100%',
              height: 'auto',
            }}
          />
        </SocialLinkIcon>
        <SocialLinkIcon href='https://speakerdeck.com/pocket7878'>
          <FontAwesomeIcon icon={faSpeakerDeck} size='2xl' />
        </SocialLinkIcon>
        <SocialLinkIcon href='https://note.com/pocket7878'>
          <Image
            src='/note_logo.svg'
            alt='Note Logo'
            width={32}
            height={32}
            style={{
              maxWidth: '100%',
              height: 'auto',
            }}
          />
        </SocialLinkIcon>
      </div>
    </article>
  );
};
