import LayoutStyles from '../styles/Layout.module.scss';

export const ContentContainer = ({ children, ...rest }) => {
  return (
    <div className={[LayoutStyles.container]} {...rest}>
      {children}
    </div>
  );
};

export default ContentContainer;
