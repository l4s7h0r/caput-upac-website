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
      
      {/* 3 explosiones amarillas horizontales */}
      <div className={styles.explosionesContainer}>
        <img src="/explosion_azul_claro.svg" alt="Explosión izquierda" className={styles.explosionIzquierda} loading="lazy" />
        <img src="/explosion_amarilla.svg" alt="Explosión centro" className={styles.explosionCentro} loading="lazy" />
        <img src="/explosion_azul_fuerte.svg" alt="Explosión derecha" className={styles.explosionDerecha} loading="lazy" />
      </div>
      
      <img src="/explosion_transparente_rojo.svg" alt="Explosión derecha roja" className={styles.explosionDerechaRoja} loading="lazy" />

      {/* Título clickeable con formato especial */}
      <button
        className={styles.titleButton}
        onClick={() => { onSwipe && onSwipe(); onShow404(); }}
        aria-label="Ir a error 404 desde formación y mediación"
      >
        <div className={styles.titleTextContainer}>
          <span className={styles.tituloFormacion}>formación</span>
          <span className={styles.tituloMediacion}>mediación</span>
        </div>
        <img src="/&.svg" alt="&" className={styles.ampersand} />
      </button>
    </section>
  );
};
