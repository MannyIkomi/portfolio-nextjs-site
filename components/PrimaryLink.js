import ButtonStyles from '../styles/buttons.module.scss';

export default function PrimaryLink({ children, href, to }) {
  return (
    <a className={ButtonStyles.primary} href={href || to} rel="noopener">
      {children}
    </a>
  );
}
