import React from 'react';
import styles from './SomosInterna.module.css';

interface SomosInternaProps {
  onGoBack?: () => void;
}

export const SomosInterna = ({ onGoBack }: SomosInternaProps) => {
  // Datos del fundador (estos pueden venir de props o de una API)
  const fundador = {
    nombreCompleto: 'Nombre completo',
    carrera: 'Carrera o profesión',
    descripcion: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.',
    imagen: '/explosion.svg', // Placeholder - reemplazar con imagen real
    redesSociales: {
      instagram: 'https://instagram.com',
      email: 'mailto:ejemplo@email.com',
      youtube: 'https://youtube.com'
    },
    proyectosPersonales: [
      {
        id: 1,
        imagen: '/explosion.svg', // Placeholder
        titulo: 'Proyecto 1'
      },
      {
        id: 2,
        imagen: '/explosion.svg', // Placeholder
        titulo: 'Proyecto 2'
      }
    ]
  };

  return (
    <section className={styles.somosInternaSection}>
      {/* Elementos decorativos a los costados */}
      <img
        src="/componente_PyC_izquierda_superior.svg"
        alt="Decoración izquierda superior"
        className={styles.decoracionIzquierda}
        loading="lazy"
      />
      <img
        src="/componente_PyC_izquierda_superior.svg"
        alt="Decoración derecha superior"
        className={styles.decoracionDerecha}
        loading="lazy"
      />

      {/* Contenedor principal */}
      <div className={styles.contenedorPrincipal}>
        {/* Header con título y logo */}
        <header className={styles.header}>
          <h1 className={styles.tituloSeccion}>somos</h1>
          <div className={styles.logoContainer}>
            <img
              src="/icons/logo caput.png"
              alt="CAPUT UPAC"
              className={styles.logo}
              loading="lazy"
            />
            <p className={styles.tagline}>colectivo de arte</p>
          </div>
        </header>

        {/* Contenido principal: dos cuadros */}
        <div className={styles.contenidoPrincipal}>
          {/* Cuadro izquierdo: Imagen del fundador */}
          <div className={styles.cuadroIzquierdo}>
            <div className={styles.imagenContainer}>
              <img
                src={fundador.imagen}
                alt={fundador.nombreCompleto}
                className={styles.imagenFundador}
                loading="lazy"
              />
            </div>
          </div>

          {/* Cuadro derecho: Información del fundador */}
          <div className={styles.cuadroDerecho}>
            <div className={styles.infoFundador}>
              <h2 className={styles.nombreCompleto}>{fundador.nombreCompleto}</h2>
              <p className={styles.carrera}>{fundador.carrera}</p>
              <p className={styles.descripcion}>{fundador.descripcion}</p>

              {/* Redes sociales */}
              <div className={styles.redesSociales}>
                <a
                  href={fundador.redesSociales.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.redSocialLink}
                  aria-label="Instagram"
                >
                  <img
                    src="/icons/instagram.svg"
                    alt="Instagram"
                    className={styles.redSocialIcon}
                    loading="lazy"
                  />
                </a>
                <a
                  href={fundador.redesSociales.email}
                  className={styles.redSocialLink}
                  aria-label="Email"
                >
                  <svg
                    className={styles.redSocialIconEmail}
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#2e68ac"
                    strokeWidth="2"
                  >
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                    <polyline points="22,6 12,13 2,6" />
                  </svg>
                </a>
                <a
                  href={fundador.redesSociales.youtube}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.redSocialLink}
                  aria-label="YouTube"
                >
                  <img
                    src="/icons/youtube.svg"
                    alt="YouTube"
                    className={styles.redSocialIcon}
                    loading="lazy"
                  />
                </a>
              </div>

              {/* Proyectos personales */}
              <div className={styles.proyectosContainer}>
                <h3 className={styles.tituloProyectos}>Proyectos personales</h3>
                <div className={styles.proyectosGrid}>
                  {fundador.proyectosPersonales.map((proyecto) => (
                    <div key={proyecto.id} className={styles.proyectoCard}>
                      <img
                        src={proyecto.imagen}
                        alt={proyecto.titulo}
                        className={styles.proyectoImagen}
                        loading="lazy"
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Botón para volver */}
        <button
          className={styles.botonVolver}
          onClick={onGoBack}
          aria-label="Volver a la página anterior"
        >
          ← Volver
        </button>
      </div>
    </section>
  );
};

