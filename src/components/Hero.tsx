export default function Hero({ dict, lang }: { dict: any, lang: string }) {
  return (
    <section id="hero">
      <div className="orb orb-purple"></div>
      <div className="orb orb-gold"></div>
      <div className="hero-eyebrow">{dict.eyebrow}</div>
      
      <h1 style={{ position: 'absolute', width: '1px', height: '1px', padding: 0, margin: '-1px', overflow: 'hidden', clip: 'rect(0, 0, 0, 0)', whiteSpace: 'nowrap', borderWidth: 0 }}>
          {lang === 'de' ? 'Uru Pampa — Lateinamerikanische Band in Berlin' : 
           lang === 'en' ? 'Uru Pampa — Latin American Band in Berlin' : 
           'Uru Pampa — Banda Latinoamericana en Berlín'}
        </h1>

      {/* ¡Logo restaurado a su gloria original! */}
      <img src="/logo-urupampa.png" alt="Uru Pampa Logo" className="hero-logo-img" />

      <p className="hero-subtitle">
        <strong>{dict.subtitle_strong}</strong>{dict.subtitle}<br />{dict.desc}
      </p>
      
      <div style={{ display: 'flex', gap: '1.5rem', justifyContent: 'center', flexWrap: 'wrap', marginTop: '1rem', position: 'relative', zIndex: 20 }}>
        <a href={`/${lang}#shows`} className="hero-cta" aria-label={dict.btn_shows}>
          {dict.btn_shows}
        </a>
        <a href={`/${lang}#booking`} className="hero-cta" style={{ background: 'var(--gold)', color: 'var(--black)', borderColor: 'var(--gold)', fontWeight: 'bold' }} aria-label={dict.btn_booking}>
          {dict.btn_booking}
        </a>
      </div>
      
      <div className="scroll-hint"><div className="scroll-line"></div><span>{dict.scroll}</span></div>
    </section>
  );
}