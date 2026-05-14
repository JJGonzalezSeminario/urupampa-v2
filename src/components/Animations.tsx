"use client";
import { useEffect } from 'react';

export default function Animations() {
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });
    
    // Un pequeño retraso para asegurar que el HTML ya está dibujado
    setTimeout(() => {
      document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
    }, 100);
    
    return () => observer.disconnect();
  }, []);

  return null; // Este componente es invisible, solo hace magia por detrás
}