export default function Media({ dict }: { dict: any }) {
  return (
    <section id="media">
      <div className="container">
        <div className="reveal">
          <div className="section-label">{dict.label}</div>
          <h2 className="section-title">{dict.title}<br /><em>{dict.title_em}</em></h2>
        </div>

        {/* --- El video embebido principal (El "héroe" de la sección) --- */}
        {/* Este es el video arreglado que pidió Claude */}
        <div className="reveal reveal-delay-1" style={{ marginBottom: '4rem', borderRadius: '12px', overflow: 'hidden', boxShadow: '0 20px 40px rgba(0,0,0,0.5)', background: '#000' }}>
          <div style={{ position: 'relative', paddingBottom: '56.25%', height: 0 }}>
            {/* Cambia 'Rsay7wPtHTE' por el ID de tu mejor video. Se ha añadido 'origin' para intentar arreglar el error. */}
            {/* El iframe con la política de referidos estricta para solucionar el Fehler 153 */}
            <iframe 
              style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}
              src="https://www.youtube.com/embed/Rsay7wPtHTE" 
              title="Uru Pampa Live" 
              frameBorder="0" 
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen>
            </iframe>
          </div>
        </div>
        
        {/* --- TUS 3 TARJETAS COLORIDAS ORIGINALES RESTAURADAS --- */}
        {/* Se han actualizado todos los textos fijos por el diccionario, pero se han puesto valores por defecto para que no se rompa nada si el diccionario no está completo */}
        <div className="media-grid">
          
          <a href="https://www.facebook.com/urupampa.serenata/" target="_blank" rel="noopener noreferrer" className="media-card reveal reveal-delay-2">
            <div className="media-icon facebook">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.469h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.469h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
            </div>
            <h4>{dict.fb_title || 'Facebook'}</h4>
            <p>{dict.fb_desc || 'Síguenos y entérate de nuestras presentaciones y novedades'}</p>
            <span className="media-link">{dict.fb_btn || '→ Abrir Facebook'}</span>
          </a>
          
          <a href="https://www.youtube.com/watch?v=Rsay7wPtHTE" target="_blank" rel="noopener noreferrer" className="media-card reveal reveal-delay-3">
            <div className="media-icon youtube">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
            </div>
            <h4>{dict.yt_title || 'YouTube'}</h4>
            <p>{dict.yt_desc || 'Videos en vivo y presentaciones completas'}</p>
            <span className="media-link">→ Ir al canal</span>
          </a>
          
          <a href="https://www.instagram.com/urupampa_berlin/" target="_blank" rel="noopener noreferrer" className="media-card reveal reveal-delay-4">
            <div className="media-icon instagram">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>
            </div>
            <h4>{dict.ig_title || 'Instagram'}</h4>
            <p>{dict.ig_desc || 'Fotos, stories y actualizaciones de la banda'}</p>
            <span className="media-link">{dict.ig_btn || '→ Seguir @urupampa_berlin'}</span>
          </a>

        </div>
      </div>
    </section>
  );
}