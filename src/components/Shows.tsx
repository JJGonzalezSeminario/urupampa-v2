"use client";

// --- PANEL DE CONTROL DE SHOWS ---
const showsData = [
  {
    id: 1,
    image: "/show1.jpg", 
    date: "30.05", 
    time: "19:00 UHR",
    title: "Live-Show en Sugar Tapas Bar",
    location: "Wilhelmshavener Str. 14, 10551 Berlin",
    description: {
      es: "Reservas por la página directa del restaurant Sugar.",
      de: "Reservierung direkt über die Website des Restaurants Sugar.",
      en: "Reservations directly through the Sugar restaurant website."
    },
    buttonText: {
      es: "Reservar Mesa",
      de: "Tisch Reservieren",
      en: "Book a Table"
    },
    link: "https://sugar-tapas-bar.eatbu.com/?lang=de",
    isExternal: true
  },
  {
    id: 2,
    image: "/show2.jpg", 
    date: "12.06",
    time: "19:00 UHR",
    title: "LaFrikan - ARTivisten e.V.",
    location: "Baergarten, Schnellerstraße 137, 12439 Berlin",
    description: {
      es: "Sin entrada pero con un aporte voluntario para los artistas.",
      de: "Eintritt frei — Freiwillige Spende für die Künstler.",
      en: "Free admission — Voluntary contribution for the artists."
    },
    buttonText: {
      es: "Info",
      de: "Info",
      en: "Info"
    },
    // Enlace actualizado a artivisten.org
    link: "https://artivisten.org/", 
    isExternal: true // Ahora es un enlace externo
  }
];

export default function Shows({ dict, lang }: { dict: any; lang: string }) {
  const currentLang = (lang === 'de' || lang === 'en') ? lang : 'es';

  return (
    <section id="shows" style={{ padding: '8rem 0', background: 'var(--black)' }}>
      <div className="container">
        
        <div className="reveal" style={{ marginBottom: '4rem' }}>
          <div className="section-label">{dict.label || "Shows"}</div>
          <h2 className="section-title" style={{ fontSize: '3rem', fontFamily: 'var(--font-playfair), serif', color: 'var(--white)', lineHeight: '1.3', textTransform: 'none' }}>
            {lang === 'de' ? 'Nächste' : lang === 'en' ? 'Upcoming' : 'Próximos'}{' '}
            <span style={{ color: 'var(--gold)' }}>
              {lang === 'de' ? 'Auftritte' : lang === 'en' ? 'Shows' : 'Shows'}
            </span>
          </h2>
        </div>

        <div className="shows-grid">
          {showsData.map((show) => (
            <div key={show.id} className="show-card reveal" style={{ background: 'rgba(255,255,255,0.02)', borderRadius: '12px', border: '1px solid rgba(255,255,255,0.05)', overflow: 'hidden', display: 'flex', flexDirection: 'column' }}>
              
              <div style={{ width: '100%', position: 'relative', overflow: 'hidden', aspectRatio: '4/5', background: '#0a0a0a' }}>
                <img 
                  src={show.image} 
                  alt={show.title} 
                  className="flyer-img"
                  // CAMBIO CLAVE: objectFit 'contain' asegura que la imagen cuadrada se vea completa
                  style={{ width: '100%', height: '100%', objectFit: 'contain', transition: 'transform 0.4s ease' }}
                />
              </div>

              <div style={{ padding: '2.5rem', display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
                
                <div style={{ display: 'flex', gap: '1rem', alignItems: 'center', marginBottom: '1rem', fontFamily: 'var(--font-bebas), sans-serif', fontSize: '1.2rem', letterSpacing: '1px' }}>
                  <span style={{ color: 'var(--gold)' }}>{show.date}</span>
                  <span style={{ color: 'rgba(255,255,255,0.2)' }}>•</span>
                  <span style={{ color: 'var(--white)' }}>{show.time}</span>
                </div>

                <h3 style={{ fontSize: '1.8rem', fontFamily: 'var(--font-playfair), serif', color: 'var(--white)', marginBottom: '0.5rem', fontWeight: 'normal' }}>
                  {show.title}
                </h3>

                <div style={{ fontSize: '0.85rem', color: 'var(--purple-light)', marginBottom: '1.5rem', textTransform: 'uppercase', letterSpacing: '1px' }}>
                  {show.location}
                </div>

                <p style={{ color: 'var(--grey)', lineHeight: '1.6', marginBottom: '2.5rem', fontSize: '1rem', flexGrow: 1 }}>
                  {show.description[currentLang as keyof typeof show.description]}
                </p>

                <a 
                  href={show.link}
                  target={show.isExternal ? "_blank" : "_self"}
                  rel={show.isExternal ? "noopener noreferrer" : ""}
                  className="show-cta-btn"
                  style={{ 
                    display: 'block', 
                    width: '100%', 
                    padding: '1.1rem', 
                    textAlign: 'center', 
                    background: show.isExternal ? 'var(--gold)' : 'transparent',
                    color: show.isExternal ? 'var(--black)' : 'var(--gold)',
                    border: '2px solid var(--gold)',
                    fontFamily: 'var(--font-bebas), sans-serif',
                    fontSize: '1.2rem',
                    letterSpacing: '2px',
                    textTransform: 'uppercase',
                    textDecoration: 'none',
                    transition: 'all 0.3s ease',
                    fontWeight: show.isExternal ? 'bold' : 'normal',
                    boxSizing: 'border-box'
                  }}
                >
                  {show.buttonText[currentLang as keyof typeof show.buttonText]}
                </a>

              </div>
            </div>
          ))}
        </div>

      </div>

      <style>{`
        .shows-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(340px, 1fr));
          gap: 3rem;
        }
        /* Efecto sutil al pasar el mouse */
        .show-card:hover .flyer-img {
          transform: scale(1.02);
        }
        .show-cta-btn:hover {
          background: #c78323 !important;
          border-color: #c78323 !important;
          color: var(--black) !important;
          transform: translateY(-2px);
          box-shadow: 0 10px 20px rgba(0,0,0,0.2);
        }
        @media (max-width: 768px) {
          .shows-grid {
            grid-template-columns: 1fr !important;
            gap: 2.5rem;
          }
        }
      `}</style>
    </section>
  );
}