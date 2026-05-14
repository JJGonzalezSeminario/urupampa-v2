export default function Footer({ dict, lang }: { dict: any, lang: string }) {
  return (
    <footer>
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <h3>Uru<span style={{ color: 'var(--gold)' }}>Pampa</span></h3>
            <div style={{ fontSize: '0.7rem', letterSpacing: '0.3em', textTransform: 'uppercase', color: 'var(--purple-light)', marginTop: '0.3rem' }}>Berlin · Iquique</div>
          </div>
          <div className="footer-col">
            <h5>{dict.nav}</h5>
            <a href={`/${lang}#about`}>La Banda</a>
            <a href={`/${lang}#gallery`}>Galería</a>
            <a href={`/${lang}#shows`}>Shows</a>
            <a href={`/${lang}#booking`}>Contacto</a>
          </div>
          <div className="footer-col">
            <h5>{dict.social}</h5>
            <a href="https://www.instagram.com/urupampa_berlin/" target="_blank" rel="noopener noreferrer">Instagram</a>
            <a href="https://www.facebook.com/urupampa.serenata/" target="_blank" rel="noopener noreferrer">Facebook</a>
          </div>
        </div>
        <div className="footer-bottom">
          <span>© 2026 Uru Pampa Berlin — {dict.rights}</span>
          <div style={{ display: 'flex', gap: '1.5rem' }}>
            <a href={`/${lang}/impressum`} style={{ color: 'var(--grey)', textDecoration: 'none', fontSize: '0.75rem' }}>Impressum</a>
            <a href={`/${lang}/datenschutz`} style={{ color: 'var(--grey)', textDecoration: 'none', fontSize: '0.75rem' }}>Datenschutz</a>
          </div>
          <span>{dict.made} <span>Berlín × Iquique</span></span>
        </div>
      </div>
    </footer>
  );
}