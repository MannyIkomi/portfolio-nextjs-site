export default function AnchorLink({ className, children, href }) {
  if (!href) {
    throw Error('AnchorLinks require an href');
  }
  return (
    <a className={className} rel="noopener noreferrer" href={href}>
      {children}
    </a>
  );
}
