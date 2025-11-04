import React from 'react';
import styles from './Residencias.module.css';
import explosionGraphic from '../../../public/explosion_transparente.svg';

interface ResidenciasProps {
  onShow404: () => void;
  onSwipe?: () => void;
}

export const Residencias = ({ onShow404, onSwipe }: ResidenciasProps) => {
  return (
    <section id="residencias" className={styles.residenciasGrid}>
      {/* Decorativos posicionados en % para fácil ajuste */}
      <img src="/residencia/rectangulo_inferiordrecha_residencias.svg" alt="Rectángulo inferior derecho" className={styles.rectInferiorDerecha} />
      <img src="/residencia/tricolor_superiordrecha_residencias.svg" alt="Tricolor detrás del título" className={styles.tricolorDetrasTitulo} />
      <img src="/residencia/componente_medio_residencias.svg" alt="Componente medio bajo el título" className={styles.componenteMedio} />
      <img src="/residencia/tricolor_superiorizquierda_residencias.svg" alt="Tricolor superior izquierda" className={styles.tricolorSuperiorIzquierda} />
      <img src="/explosion_transparente.svg" alt="Explosión izquierda" className={styles.explosionIzquierda} />
      <img src="/explosion_azul_claro.svg" alt="Explosión derecha" className={styles.explosionDerecha} />

      <h1
        className={styles.residenciasTitle}
        onClick={() => { onSwipe && onSwipe(); onShow404(); }}
        role="button"
        tabIndex={0}
        onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') { onSwipe && onSwipe(); onShow404(); } }}
        aria-label="Ir a error 404 desde residencias"
      >
        residencias
      </h1>

      {/* subtítulos eliminados por ahora */}

      {/* elemento legado eliminado */}
    </section>
  );
};
