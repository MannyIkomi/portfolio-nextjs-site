import styles from './footer.module.scss';
import layout from '../../styles/layout.module.scss';

export default function Footer() {
  return (
    <footer className={[styles.footer, layout.gridLayout].join(' ')}>
      footer content
    </footer>
  );
}
