const LOGO_SRC = '/devon-logo.png';

export default function DevonLogo({ variant = 'sidebar' }) {
  return (
    <div className={`devon-logo devon-logo--${variant}`}>
      <img
        src={LOGO_SRC}
        alt="devon powered by emagine"
        className="devon-logo__img"
      />
    </div>
  );
}
