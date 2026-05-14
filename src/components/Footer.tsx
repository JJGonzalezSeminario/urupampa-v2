export default function Footer({ dict, lang }: { dict: any, lang: string }) {
  return (
    <footer>
      <div className="container">
        <div className="footer-grid">
          
          <div className="footer-brand">
            <h3 style={{ fontFamily: 'var(--font-playfair), serif', fontSize: '2rem' }}>Uru<span style={{ color: 'var(--gold)' }}>Pampa</span></h3>
            <div style={{ fontSize: '0.7rem', letterSpacing: '0.3em', textTransform: 'uppercase', color: 'var(--purple-light)', marginTop: '0.3rem', marginBottom: '1.5rem' }}>Berlin · Iquique</div>
            
            <p style={{ color: 'var(--grey)', fontSize: '0.95rem', lineHeight: '1.6', maxWidth: '350px' }}>
              {lang === 'de' ? 'Anden- und lateinamerikanische Musik von den Wurzeln der Atacama-Wüste bis auf die Bühnen Berlins. Träger einer lebendigen Tradition.' : 
               lang === 'en' ? 'Andean and Latin American music from the roots of the Atacama Desert to the stages of Berlin. Bearers of a living tradition.' :
               'Música andina y latinoamericana desde las raíces del desierto de Atacama hasta los escenarios de Berlín. Portadores de una tradición viva.'}
            </p>
          </div>

          <div className="footer-col">
            <h5>{dict.nav}</h5>
            <a href={`/${lang}#about`}>La Banda</a>
            <a href={`/${lang}#gallery`}>Galería</a>
            <a href={`/${lang}#shows`}>Shows</a>
            <a href={`/${lang}#media`}>Música</a>
            <a href={`/${lang}#booking`}>Contacto</a>
          </div>

          <div className="footer-col">
            <h5>{dict.social}</h5>
            <a href="https://www.instagram.com/urupampa_berlin/" target="_blank" rel="noopener noreferrer">Instagram</a>
            <a href="https://www.facebook.com/urupampa.serenata/" target="_blank" rel="noopener noreferrer">Facebook</a>
            <a href="https://www.youtube.com/watch?v=Rsay7wPtHTE" target="_blank" rel="noopener noreferrer">YouTube</a>
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