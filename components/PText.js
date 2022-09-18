import Typography from '../styles/typography.module.scss';

export function PText({ children }) {
  return <p className={Typography.bodyText}>{children}</p>;
}

export default PText;
