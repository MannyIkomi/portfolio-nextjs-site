import Link from 'next/link';
import Layout from '../styles/layout.module.scss';
import Styles from './styles/footer.module.scss';
import SocialIcon from './SocialIcon';
import ContentContainer from './ContentContainer';
import Logotype from '../public/logotype.svg';
import LurkEmote from './LurkEmote';

export default function Footer() {
  return (
    <footer className={Styles.footer}>
      <ContentContainer className={Styles.content}>
        <Link href={'/'}>
          <a>
            <Logotype
              viewBox={'0 0 177 125'} // allows proportional scaling
              style={{ width: '5rem', height: 'auto' }}
            />
          </a>
        </Link>
        <div className={Styles.social}>
          <SocialIcon href={'https://poly.mannyikomi.com'} icon={'Polywork'} />
          <SocialIcon
            href={'https://www.linkedin.com/in/ikomi/'}
            icon={'LinkedIn'}
          />
        </div>
      </ContentContainer>
      <LurkEmote className={Styles.emote} />
    </footer>
  );
}
