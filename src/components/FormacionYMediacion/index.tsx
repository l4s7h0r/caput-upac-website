import React from 'react';
import styles from './FormacionYMediacion.module.css';

interface FormacionYMediacionProps {
  onShow404: () => void;
  onSwipe?: () => void;
}

export const FormacionYMediacion = ({ onShow404, onSwipe }: FormacionYMediacionProps) => {
  return (
    <section id="formacionYMediacion" className={styles.formacionYMediacionSection}>
      {/* Decorativos y elementos */}
      <img src="/rectangulo_derecha_FyM.svg" alt="Rectángulo derecho" className={styles.rectDerecha} loading="lazy" />
      <img src="/elemento_medio_FyM.svg" alt="Elemento medio" className={styles.elementoMedio} loading="lazy" />
      <img src="/explosion_amarilla.svg" alt="Explosión izquierda" className={styles.explosionIzquierda} loading="lazy" />
      <img src="/explosion_amarilla.svg" alt="Explosión derecha" className={styles.explosionDerecha} loading="lazy" />

      {/* Título clickeable con formato especial */}
      <button
        className={styles.titleButton}
        onClick={() => { onSwipe && onSwipe(); onShow404(); }}
        aria-label="Ir a error 404 desde formación y mediación"
      >
        <span className={styles.tituloFormacion}>formación</span>
        <img src="/&.svg" alt="&" className={styles.ampersand} />
        <span className={styles.tituloMediacion}>mediación</span>
      </button>
    </section>
  );
};
