import React from 'react';
import styles from './PublicacionesYCirculaciones.module.css';

interface PublicacionesYCirculacionesProps {
  onShow404: () => void;
  onSwipe?: () => void;
}

const PublicacionesYCirculaciones: React.FC<PublicacionesYCirculacionesProps> = ({ onShow404, onSwipe }) => {
  return (
    <section className={styles.publicacionesYCirculacionesSection}>
      {/* Elementos decorativos posicionados por % para ajuste manual */}
      <img src="/explosion_morado.svg" alt="Explosión morada izquierda" className={styles.explosionIzquierda} loading="lazy" />
      <img src="/componente_PyC_izquierda_medio.svg" alt="Rectángulo amarillo" className={styles.rectanguloAmarillo} loading="lazy" />
      <img src="/componente_PyC_medio_izquierdo.svg" alt="Elemento cuadrado" className={styles.elementoCuadrado} loading="lazy" />
      <img src="/componente_PyC_izquierda_superior.svg" alt="Elemento superior derecho" className={styles.elementoSuperiorDerecha} loading="lazy" />
      <img src="/explosion_azul_fuerte.svg" alt="Explosión azul fondo" className={styles.explosionAzulFondo} loading="lazy" />
      <img src="/explosion_roja.svg" alt="Explosión roja encima" className={styles.explosionRojaEncima} loading="lazy" />

      {/* Título clickeable con formato especial */}
      <button
        className={styles.titleButton}
        onClick={() => { onSwipe && onSwipe(); onShow404(); }}
        aria-label="Ir a error 404 desde publicaciones y circulación"
      >
        <span className={styles.tituloPublicaciones}>publicaciones</span>
        <span className={styles.tituloYCirculacion}>y circulación</span>
      </button>
    </section>
  );
};

export { PublicacionesYCirculaciones };
