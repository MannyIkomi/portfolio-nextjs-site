import Typography from '../styles/typography.module.scss';

export function ParagraphText({ children }) {
  return <p className={Typography.bodyText}>{children}</p>;
}

export default ParagraphText;
