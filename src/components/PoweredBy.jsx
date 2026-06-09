export default function PoweredBy({ variant = 'default' }) {
  return (
    <p className={`powered-by${variant === 'sidebar' ? ' powered-by--sidebar' : ''}`}>
      Powered by <strong>Millenium Semiconductors India</strong>
    </p>
  );
}
