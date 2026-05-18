"use client";
import { useState } from 'react';

export default function Booking({ dict }: { dict: any }) {
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success'>('idle');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('submitting');
    
    const form = e.currentTarget;
    const data = new FormData(form);
    
    try {
      const response = await fetch("https://formspree.io/f/TU_ENDPOINT_AQUI", {
        method: "POST",
        body: data,
        headers: { 'Accept': 'application/json' }
      });
      
      if (response.ok) {
        setStatus('success');
        form.reset(); 
      } else {
        alert("Hubo un problema enviando el mensaje. Por favor, intenta de nuevo o mándanos un correo a info@urupampa-berlin.de.");
        setStatus('idle');
      }
    } catch (error) {
      alert("Hubo un error de conexión. Por favor, intenta de nuevo.");
      setStatus('idle');
    }
  };

  return (
    <section id="booking" style={{ padding: '8rem 0' }}>
      <div className="container">
        
        {/* --- ENCABEZADO CORREGIDO: Alineado a la izquierda (sin text-center) --- */}
        <div className="booking-header reveal" style={{ marginBottom: '4rem' }}>
          
          {/* Le quitamos el justifyContent: center para que vuelva a la izquierda */}
          <div className="section-label">{dict.label || "Contacto"}</div>
          
          <h2 style={{ fontSize: '3rem', fontFamily: 'var(--font-playfair), serif', color: 'var(--white)', lineHeight: '1.3' }}>
            {dict.title}{' '} {/* <-- AQUÍ ESTÁ EL ESPACIO AÑADIDO PARA QUE NO SE PEGUE */}
            <span style={{ fontFamily: 'var(--font-playfair), serif', fontStyle: 'normal', fontWeight: 'bold' }}>
              Uru<span style={{ color: 'var(--gold)' }}>Pampa</span>
            </span>
            <br />
            {dict.title2}
          </h2>
          
          {/* Párrafo alineado a la izquierda (sin margin auto) */}
          <p style={{ color: 'var(--grey)', maxWidth: '600px', marginTop: '1.5rem', fontSize: '1.1rem', lineHeight: '1.6' }}>
            {dict.desc}
          </p>
        </div>

        {/* --- FORMULARIO --- */}
        <div className="booking-content reveal reveal-delay-1" style={{ maxWidth: '800px', margin: '0 auto', background: 'rgba(255,255,255,0.02)', padding: '4rem', borderRadius: '16px', border: '1px solid rgba(255,255,255,0.05)', backdropFilter: 'blur(10px)' }}>
          
          {status === 'success' ? (
            <div style={{ textAlign: 'center', padding: '2rem 0', color: 'var(--gold)', animation: 'fadeIn 0.5s ease' }}>
              <svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" style={{ margin: '0 auto 1.5rem auto', display: 'block' }}>
                <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                <polyline points="22 4 12 14.01 9 11.01"></polyline>
              </svg>
              <h3 style={{ fontSize: '2rem', marginBottom: '1rem', fontFamily: 'var(--font-playfair), serif', color: 'var(--white)' }}>{dict.form_success || "¡Mensaje enviado!"}</h3>
              <p style={{ color: 'var(--grey)' }}>{dict.form_success_desc || "Gracias por contactarnos. Nos comunicaremos contigo lo antes posible."}</p>
              <button onClick={() => setStatus('idle')} style={{ background: 'transparent', border: '1px solid var(--gold)', color: 'var(--gold)', padding: '0.8rem 2rem', marginTop: '2.5rem', cursor: 'pointer', fontFamily: 'var(--font-bebas), sans-serif', letterSpacing: '2px', fontSize: '1.1rem', transition: 'all 0.3s ease', textTransform: 'uppercase' }}>
                {dict.form_new || "Enviar otro mensaje"}
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="booking-form">
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '2rem', marginBottom: '2rem' }}>
                <div className="form-group">
                  <label>{dict.form_name || "Nombre / Organización"}</label>
                  <input type="text" name="name" required placeholder="Ej: Festival Arata Andino" />
                </div>
                <div className="form-group">
                  <label>{dict.form_email || "Correo Electrónico"}</label>
                  <input type="email" name="email" required placeholder="tu@correo.com" />
                </div>
              </div>
              
              <div className="form-group" style={{ marginBottom: '2rem' }}>
                <label>{dict.form_date || "Fecha y Lugar del Evento (Opcional)"}</label>
                <input type="text" name="event_details" placeholder="Ej: 15 de Agosto, Berlín" />
              </div>

              <div className="form-group" style={{ marginBottom: '3rem' }}>
                <label>{dict.form_msg || "Cuéntanos sobre tu evento (detalles, presupuesto...)"}</label>
                <textarea name="message" required rows={5} placeholder="..."></textarea>
              </div>

              <button type="submit" disabled={status === 'submitting'} className="submit-btn" style={{ width: '100%', padding: '1.2rem', background: 'var(--gold)', color: 'var(--black)', border: 'none', fontFamily: 'var(--font-bebas), sans-serif', fontSize: '1.3rem', letterSpacing: '2px', cursor: status === 'submitting' ? 'wait' : 'pointer', transition: 'all 0.3s ease', display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '0.5rem', textTransform: 'uppercase' }}>
                {status === 'submitting' ? (
                  <span style={{ opacity: 0.7 }}>{dict.form_sending || "Enviando..."}</span>
                ) : (
                  <>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="22" y1="2" x2="11" y2="13"></line><polygon points="22 2 15 22 11 13 2 9 22 2"></polygon></svg>
                    {dict.form_send || "Solicitar Presupuesto"}
                  </>
                )}
              </button>
            </form>
          )}

          <div style={{ marginTop: '3rem', paddingTop: '2rem', borderTop: '1px solid rgba(255,255,255,0.1)', display: 'flex', justifyContent: 'center', gap: '2rem', flexWrap: 'wrap' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--grey)', fontSize: '0.9rem' }}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
              info@urupampa-berlin.de
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--grey)', fontSize: '0.9rem' }}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
              Berlin, Deutschland
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .booking-form .form-group label {
          display: block;
          margin-bottom: 0.8rem;
          color: var(--gold);
          font-size: 0.9rem;
          text-transform: uppercase;
          letter-spacing: 1px;
          font-family: var(--font-bebas), sans-serif;
        }
        .booking-form .form-group input, .booking-form .form-group textarea {
          width: 100%;
          padding: 1.2rem;
          background: rgba(0, 0, 0, 0.4);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 6px;
          font-family: inherit;
          color: var(--white);
          font-size: 1rem;
          transition: all 0.3s ease;
        }
        .booking-form .form-group input:focus, .booking-form .form-group textarea:focus {
          outline: none;
          border-color: var(--gold);
          background: rgba(0, 0, 0, 0.6);
          box-shadow: 0 0 15px rgba(212, 135, 42, 0.2);
        }
        .booking-form .submit-btn:hover:not(:disabled) {
          background: #c78323 !important;
          transform: translateY(-2px);
          box-shadow: 0 10px 20px rgba(0,0,0,0.3);
        }
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @media (max-width: 768px) {
          .booking-content {
            padding: 2.5rem 1.5rem !important;
          }
        }
      `}</style>
    </section>
  );
}