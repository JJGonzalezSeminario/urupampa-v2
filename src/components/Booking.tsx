export default function Booking({ dict }: { dict: any }) {
  return (
    <section id="booking">
      <div className="container">
        <div className="booking-card reveal">
          <div>
            <div className="section-label">{dict.label}</div>
            <h2>{dict.title} <em style={{ color: 'var(--gold)', fontStyle: 'italic', fontFamily: 'var(--font-cormorant), serif', fontSize: '1.2em' }}>{dict.title_em}</em><br />{dict.title2}</h2>
            <p>{dict.desc}</p>
            <div style={{ marginTop: '1.5rem', fontSize: '0.9rem', color: 'var(--grey)' }}>
              <div style={{ marginBottom: '0.5rem' }}>📍 Berlin, Deutschland</div>
              <div style={{ marginBottom: '0.5rem' }}>✉️ urupampa_berlin@gmail.com</div>
              <div>🌐 Iquique × Berlin · Música Latinoamericana</div>
            </div>
          </div>
          <div className="booking-btns">
            <a href="mailto:urupampa_berlin@gmail.com" className="btn-primary">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
              {dict.btn_msg}
            </a>
            <a href="https://wa.me/491607649232" target="_blank" rel="noopener noreferrer" className="btn-outline">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M12.031 0C5.396 0 .013 5.37.01 12.01c0 2.12.552 4.19 1.6 6.01L.001 24l6.13-1.605a11.96 11.96 0 005.897 1.55h.005c6.634 0 12.016-5.373 12.019-12.017C24.048 5.414 18.665.002 12.031 0zm0 21.944h-.003a9.927 9.927 0 01-5.056-1.378l-.362-.214-3.763.985.998-3.666-.235-.374a9.92 9.92 0 01-1.516-5.289c.003-5.498 4.475-9.97 9.974-9.97 2.663.001 5.166 1.04 7.046 2.923 1.88 1.882 2.916 4.385 2.914 7.049-.003 5.498-4.475 9.97-9.973 9.97l-.024-.036zm5.474-7.48c-.3-.15-1.774-.876-2.05-.976-.275-.101-.475-.15-.675.15-.2.3-.775.976-.95 1.176-.175.2-.35.225-.65.075-1.226-.605-2.203-1.163-3.056-2.613-.2-.34.202-.32.637-.935.15-.2.2-.35.1-.65-.05-.15-.675-1.626-.925-2.226-.241-.578-.485-.5-.675-.51h-.575c-.2 0-.525.075-.8.375s-1.05 1.026-1.05 2.5 1.075 2.9 1.225 3.1c.15.2 2.112 3.226 5.112 4.526.714.308 1.27.493 1.705.631.716.228 1.368.196 1.883.119.58-.087 1.774-.726 2.024-1.426.25-.7.25-1.3.175-1.426-.075-.125-.275-.2-.575-.35z"/></svg>
              WhatsApp
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}