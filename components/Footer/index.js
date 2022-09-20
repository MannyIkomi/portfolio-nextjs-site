import Styles from './footer.module.scss';
import Layout from '../../styles/layout.module.scss';
import SocialIcon from '../SocialIcon';

export default function Footer() {
  return (
    <footer className={[Styles.footer, Layout.gridLayout].join(' ')}>
      <SocialIcon href={'https://poly.mannyikomi.com'} icon={'Polywork'} />
      <SocialIcon
        href={'https://www.linkedin.com/in/ikomi/'}
        icon={'LinkedIn'}
      />
    </footer>
  );
}
