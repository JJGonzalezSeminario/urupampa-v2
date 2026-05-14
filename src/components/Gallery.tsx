"use client";
import { useState, useEffect } from 'react';
import Image from "next/image";

const images = [
  { src: '/Banda_1.jpg', label: 'Show en vivo — Berlin' },
  { src: '/Banda_2.jpg', label: 'En Concierto' },
  { src: '/Banda_3.jpg', label: 'Sonido Acústico' },
  { src: '/Banda_4.jpg', label: 'Ritmo & Percusión' },
  { src: '/Banda_5.jpg', label: 'Arata Andino 2024' },
];

export default function Gallery({ dict }: { dict: any }) {
  const [isOpen, setIsOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setIsOpen(false);
      if (e.key === 'ArrowRight') nextImg();
      if (e.key === 'ArrowLeft') prevImg();
    };
    if (isOpen) window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen]);

  const openLightbox = (index: number) => {
    setCurrentIndex(index);
    setIsOpen(true);
  };

  const closeLightbox = () => setIsOpen(false);

  const nextImg = (e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const prevImg = (e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <section id="gallery">
      <div className="container">
        <div className="gallery-header reveal">
          <div className="section-label">{dict?.label || 'En Escena'}</div>
          <h2 className="section-title">{dict?.title || 'La energía de vivir en'} <em>{dict?.title_em || 'vivo'}</em></h2>
        </div>
        
        <div className="gallery-grid reveal">
          {images.map((img, index) => (
            <div key={index} className="gallery-item" onClick={() => openLightbox(index)}>
              <div className="gallery-item-inner" style={{ position: 'relative', overflow: 'hidden' }}>
                {/* Optimización de Next.js para imágenes */}
                <Image 
                  src={img.src} 
                  alt={img.label} 
                  fill 
                  sizes="(max-width: 768px) 100vw, 33vw"
                  style={{ objectFit: 'cover' }}
                />
                <div className="gallery-overlay"></div>
                <span className="gallery-label">{img.label}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* --- EL LIGHTBOX "WOW" --- */}
      {isOpen && (
        <div className="wow-lightbox" onClick={closeLightbox}>
          <div className="wow-counter">
            {currentIndex + 1} <span style={{ color: 'var(--purple-light)', opacity: 0.5 }}>/ {images.length}</span>
          </div>

          <button className="wow-btn wow-close" onClick={closeLightbox} aria-label="Cerrar galería">
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
          </button>

          <button className="wow-btn wow-prev" onClick={prevImg} aria-label="Foto anterior">
            <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"><polyline points="15 18 9 12 15 6"></polyline></svg>
          </button>

          <div className="wow-content" onClick={(e) => e.stopPropagation()}>
            {/* Imagen del Lightbox (Aquí usamos img normal porque el Lightbox necesita comportamiento libre) */}
            <img key={currentIndex} className="wow-img" src={images[currentIndex].src} alt={images[currentIndex].label} />
            <div key={`caption-${currentIndex}`} className="wow-caption">
              {images[currentIndex].label}
            </div>
          </div>

          <button className="wow-btn wow-next" onClick={nextImg} aria-label="Foto siguiente">
            <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"><polyline points="9 18 15 12 9 6"></polyline></svg>
          </button>

          <style>{`
            .wow-lightbox {
              position: fixed; top: 0; left: 0; width: 100vw; height: 100vh;
              background: rgba(5, 2, 10, 0.9); backdrop-filter: blur(15px); -webkit-backdrop-filter: blur(15px);
              z-index: 9999; display: flex; justify-content: center; align-items: center;
              opacity: 0; animation: fadeIn 0.4s ease forwards;
            }
            @keyframes fadeIn { to { opacity: 1; } }
            
            .wow-content { display: flex; flex-direction: column; align-items: center; max-width: 85vw; max-height: 85vh; }
            
            .wow-img {
              max-height: 75vh; max-width: 100%; object-fit: contain; border-radius: 4px;
              box-shadow: 0 20px 60px rgba(0,0,0,0.8); opacity: 0; transform: scale(0.95);
              animation: popIn 0.5s cubic-bezier(0.16, 1, 0.3, 1) forwards;
            }
            @keyframes popIn { to { opacity: 1; transform: scale(1); } }
            
            .wow-caption {
              margin-top: 1.5rem; font-family: 'Playfair Display', serif; font-size: 1.2rem;
              color: var(--gold); font-style: italic; letter-spacing: 2px;
              opacity: 0; transform: translateY(10px); animation: slideUp 0.5s ease 0.2s forwards;
            }
            @keyframes slideUp { to { opacity: 1; transform: translateY(0); } }

            .wow-counter { position: absolute; top: 2rem; left: 2.5rem; font-family: 'Bebas Neue', sans-serif; font-size: 1.5rem; color: var(--white); letter-spacing: 3px; }

            .wow-btn { position: absolute; background: transparent; border: none; color: rgba(255,255,255,0.4); cursor: pointer; transition: all 0.3s ease; display: flex; justify-content: center; align-items: center; }
            .wow-btn:hover { color: var(--gold); transform: scale(1.2); }
            .wow-prev { left: 2.5rem; top: 50%; transform: translateY(-50%); }
            .wow-prev:hover { transform: translateY(-50%) scale(1.2) translateX(-5px); }
            .wow-next { right: 2.5rem; top: 50%; transform: translateY(-50%); }
            .wow-next:hover { transform: translateY(-50%) scale(1.2) translateX(5px); }
            .wow-close { top: 2rem; right: 2.5rem; }
            .wow-close:hover { transform: rotate(90deg) scale(1.1); color: var(--white); }

            @media (max-width: 768px) {
              .wow-prev, .wow-next { display: none; }
              .wow-counter { top: 1.5rem; left: 1.5rem; }
              .wow-close { top: 1.5rem; right: 1.5rem; }
              .wow-caption { font-size: 1rem; text-align: center; }
            }
          `}</style>
        </div>
      )}
    </section>
  );
}