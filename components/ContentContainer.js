import LayoutStyles from '../styles/layout.module.scss';

export const ContentContainer = ({ children, ...rest }) => {
  return (
    <div className={[LayoutStyles.container]} {...rest}>
      {children}
    </div>
  );
};

export default ContentContainer;
