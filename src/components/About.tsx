export default function About({ dict }: { dict: any }) {
  return (
    <section id="about">
      <div className="container">
        <div className="about-grid">
          <div className="about-text reveal">
            <div className="section-label">{dict.label}</div>
            <h2 className="section-title">{dict.title1}<br />{dict.title2} <em>Spree</em></h2>
            <div className="alt-divider"><div className="diamond"></div></div>
            <p><strong>{dict.p1_strong}</strong>{dict.p1}</p>
            <p>{dict.p2}<strong>{dict.p2_strong}</strong>{dict.p2_end}</p>
            <p>{dict.p3}</p>
            <div className="about-tags">
              <span className="tag">Música Andina</span><span className="tag">Charango</span><span className="tag">Quena</span><span className="tag">Guitarra</span><span className="tag">Cumbia</span><span className="tag">Fusión</span><span className="tag">Live</span>
            </div>
          </div>
          <div className="about-visual reveal reveal-delay-2">
            <div className="about-photo-frame"><img src="/Foto principal.jpg" alt="Banda" className="about-img" /></div>
          </div>
        </div>
      </div>
    </section>
  );
}