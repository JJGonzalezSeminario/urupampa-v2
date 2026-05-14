export default function SocialProof({ dict }: { dict: any }) {
  return (
    <section id="social-proof" style={{ padding: '6rem 0', background: 'rgba(255,255,255,0.02)', borderTop: '1px solid rgba(255,255,255,0.05)' }}>
      <div className="container">
        <div className="reveal" style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <div className="section-label" style={{ justifyContent: 'center' }}>{dict.label}</div>
          <h2 className="section-title" style={{ fontSize: '2.5rem' }}>{dict.title} <em>{dict.title_em}</em></h2>
        </div>
        
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
          
          <div className="reveal reveal-delay-1" style={{ background: 'linear-gradient(135deg, rgba(123,63,228,0.05), transparent)', border: '1px solid rgba(123,63,228,0.2)', padding: '3rem 2rem', position: 'relative' }}>
            <span style={{ position: 'absolute', top: '10px', left: '20px', fontSize: '5rem', color: 'var(--gold)', opacity: 0.2, fontFamily: 'Playfair Display, serif', lineHeight: 1 }}>"</span>
            <p style={{ position: 'relative', zIndex: 2, fontSize: '1.1rem', fontStyle: 'italic', lineHeight: 1.6, color: 'var(--white)', marginBottom: '1.5rem' }}>
              {dict.quote1}
            </p>
            <div style={{ fontSize: '0.8rem', letterSpacing: '0.1em', color: 'var(--gold)', textTransform: 'uppercase' }}>
              {dict.author1}
            </div>
          </div>

          <div className="reveal reveal-delay-2" style={{ background: 'linear-gradient(135deg, rgba(212,135,42,0.05), transparent)', border: '1px solid rgba(212,135,42,0.2)', padding: '3rem 2rem', position: 'relative' }}>
            <span style={{ position: 'absolute', top: '10px', left: '20px', fontSize: '5rem', color: 'var(--purple-light)', opacity: 0.2, fontFamily: 'Playfair Display, serif', lineHeight: 1 }}>"</span>
            <p style={{ position: 'relative', zIndex: 2, fontSize: '1.1rem', fontStyle: 'italic', lineHeight: 1.6, color: 'var(--white)', marginBottom: '1.5rem' }}>
              {dict.quote2}
            </p>
            <div style={{ fontSize: '0.8rem', letterSpacing: '0.1em', color: 'var(--purple-light)', textTransform: 'uppercase' }}>
              {dict.author2}
            </div>
          </div>
          
        </div>
        
        {/* Logos de trayectoria actualizados */}
        <div className="reveal reveal-delay-3" style={{ display: 'flex', justifyContent: 'center', gap: '3rem', flexWrap: 'wrap', marginTop: '4rem', opacity: 0.5, filter: 'grayscale(100%)' }}>
          <div style={{ fontFamily: 'Bebas Neue', fontSize: '1.5rem', letterSpacing: '2px' }}>FESTIVAL ARATA ANDINO</div>
          <div style={{ fontFamily: 'Bebas Neue', fontSize: '1.5rem', letterSpacing: '2px' }}>LA PELUSONA</div>
          <div style={{ fontFamily: 'Bebas Neue', fontSize: '1.5rem', letterSpacing: '2px' }}>BERLIN MUSIC SCENE</div>
        </div>
      </div>
    </section>
  );
}