import LayoutStyles from '../styles/Layout.module.scss';

export const SectionContainer = ({ children, ...rest }) => {
  return (
    <section className={[LayoutStyles.section]} {...rest}>
      {children}
    </section>
  );
};

export default SectionContainer;
