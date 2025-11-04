import React, { useState } from 'react';
import styles from './ProyectosYAcciones.module.css';
/* import Explosion from '../Explosion'; */

interface ProyectosYAccionesProps {
  onShow404: () => void;
}

export const ProyectosYAcciones = ({ onShow404 }: ProyectosYAccionesProps) => {
  const [expandedProject, setExpandedProject] = useState<number | null>(null);

  const handleProjectClick = (index: number) => {
    setExpandedProject(index === expandedProject ? null : index);
  };

  return (
    <section id="proyectosYAcciones" className={styles.proyectosYAccionesSection}>
      {/* Decorativos y fondos */}
      <img src="/explosion_verde.svg" alt="Explosión izquierda" className={styles.leftExplosion} />
      <img src="/explosion_transparente.svg" alt="Explosión inferior derecha" className={styles.bottomRightExplosion} />
      <img src="/PyA-esquinasuperiorderecha.svg" alt="Decoración esquina superior derecha" className={styles.topRightCorner} />
      <img src="/franja estrella.svg" alt="Franja estrellas" className={styles.bottomLeftStrip} />
      <img src="/rectangulo PyA rojo.svg" alt="Rectángulo rojo" className={styles.redRect} />

      {/* Título principal clickeable */}
      <h1
        className={styles.mainTitle}
        onClick={() => onShow404 && onShow404()}
        role="button"
        tabIndex={0}
        onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') { onShow404 && onShow404(); } }}
        aria-label="Ir a error 404 desde Proyectos y acciones"
      >
        proyectos<br />y acciones
      </h1>

      {/* Subtítulos eliminados temporalmente */}
    </section>
  );
};

const projectTitles = [
  { title: "PRESIÓN", summary: "Resumen de PRESIÓN..." },
  { title: "CARGA MÁXIMA", summary: "Resumen de CARGA MÁXIMA..." },
  { title: "ENEBA", summary: "Resumen de ENEBA..." },
  { title: "APTHAPI", summary: "Resumen de APTHAPI..." },
  { title: "CARAVANA 60", summary: "Resumen de CARAVANA 60..." },
  { title: "REANIMACIONES", summary: "Resumen de REANIMACIONES..." },
  { title: "AGENCIA DE VALORES", summary: "Resumen de AGENCIA DE VALORES..." },
  { title: "MÁS QUINOA MENOS ARROZ", summary: "Resumen de MÁS QUINOA MENOS ARROZ..." },
  { title: "DOCUMENTA 15", summary: "Resumen de DOCUMENTA 15..." },
  { title: "MONO BONITO", summary: "Resumen de MONO BONITO..." },
  { title: "ZONA DE CAMPAMENTO", summary: "Resumen de ZONA DE CAMPAMENTO..." },
  { title: "FESTIVAL PRESIÓN 10 AÑOS", summary: "Resumen de FESTIVAL PRESIÓN 10 AÑOS..." },
  { title: "EXPLORACIONES: CENTEX", summary: "Resumen de EXPLORACIONES: CENTEX..." },
  { title: "RECOSTADOS", summary: "Resumen de RECOSTADOS..." },
  // Puedes añadir más proyectos si es necesario, siguiendo este formato
];
