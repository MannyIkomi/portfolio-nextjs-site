import Typography from '../styles/Typography.module.scss';

export function ParagraphText({ children }) {
  return <p className={Typography.bodyText}>{children}</p>;
}

export default ParagraphText;
