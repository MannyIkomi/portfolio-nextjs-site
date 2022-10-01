import Instagram from '../public/social/InstagramIcon.svg';
import Polywork from '../public/social/PolyworkIcon.svg';
import LinkedIn from '../public/social/LinkedinIcon.svg';
import Styles from './styles/SocialIcon.module.scss';

export default function SocialIcon({ href, icon }) {
  function switchIcon(icon) {
    switch (icon) {
      case 'Polywork':
        return <Polywork />;
      case 'Instagram':
        return <Instagram />;
      case 'LinkedIn':
        return <LinkedIn />;
    }
  }

  return (
    <a href={href} className={Styles.socialIcon}>
      {switchIcon(icon)}
    </a>
  );
}
