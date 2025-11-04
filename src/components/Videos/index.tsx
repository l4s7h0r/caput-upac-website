import React, { useState, useEffect } from 'react';
import styles from './Videos.module.css';

interface VideoData {
  id: string;
  title: string;
  thumbnail: string;
  youtubeUrl?: string;
  description: string;
}

interface VideosProps {
  onShow404?: () => void;
  onSwipe?: () => void;
}

export const Videos = ({ onShow404, onSwipe }: VideosProps) => {
  const [videos, setVideos] = useState<VideoData[]>([]);

  // Datos de ejemplo de videos
  useEffect(() => {
    const videoData: VideoData[] = [
      {
        id: '1',
        title: 'Proyecto PRESIÓN',
        thumbnail: 'https://img.youtube.com/vi/dQw4w9WgXcQ/maxresdefault.jpg',
        youtubeUrl: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
        description: 'Documental sobre el proyecto PRESIÓN y su impacto en la comunidad.'
      },
      {
        id: '2',
        title: 'CARGA MÁXIMA - Proceso',
        thumbnail: 'https://img.youtube.com/vi/dQw4w9WgXcQ/maxresdefault.jpg',
        youtubeUrl: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
        description: 'Proceso creativo detrás de CARGA MÁXIMA.'
      },
      {
        id: '3',
        title: 'ENEBA - Residencia',
        thumbnail: 'https://img.youtube.com/vi/dQw4w9WgXcQ/maxresdefault.jpg',
        youtubeUrl: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
        description: 'Registro de la residencia ENEBA en diferentes comunidades.'
      },
      {
        id: '4',
        title: 'APTHAPI - Talleres',
        thumbnail: 'https://img.youtube.com/vi/dQw4w9WgXcQ/maxresdefault.jpg',
        youtubeUrl: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
        description: 'Talleres realizados en el marco del proyecto APTHAPI.'
      },
      {
        id: '5',
        title: 'CARAVANA 60',
        thumbnail: 'https://img.youtube.com/vi/dQw4w9WgXcQ/maxresdefault.jpg',
        youtubeUrl: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
        description: 'Recorrido de la CARAVANA 60 por diferentes regiones.'
      },
      {
        id: '6',
        title: 'REANIMACIONES',
        thumbnail: 'https://img.youtube.com/vi/dQw4w9WgXcQ/maxresdefault.jpg',
        youtubeUrl: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
        description: 'Proceso de REANIMACIONES en espacios públicos.'
      }
    ];
    setVideos(videoData);
  }, []);

  const handleVideoClick = (video: VideoData) => {
    onSwipe && onSwipe();
    if (video.youtubeUrl) {
      setTimeout(() => window.open(video.youtubeUrl!, '_blank'), 2000);
    } else {
      // Redirigir a 404 si no hay URL
      if (onShow404) {
        setTimeout(() => onShow404(), 2000);
      } else {
        setTimeout(() => { window.location.href = '/404'; }, 2000);
      }
    }
  };

  return (
    <section className={styles.videosSection}>
      {/* Explosión SVG en la parte superior */}
      <div className={styles.explosionContainer}>
        <img 
          src="/explosion_azul_claro.svg" 
          alt="Explosión creativa" 
          className={styles.explosionSvg}
        />
      </div>

      {/* Título principal */}
      <h1 className={styles.mainTitle}>videos</h1>

      {/* Grid de videos con efecto de aparición */}
      <div className={styles.videosGrid}>
        {videos.map((video, index) => (
          <div 
            key={video.id} 
            className={`${styles.videoCard} ${styles.cardAnimationLayer}`}
            style={{ '--animation-delay': `${index * 0.1}s` } as React.CSSProperties}
            onClick={() => handleVideoClick(video)}
          >
            <div className={styles.videoThumbnail}>
              <img 
                src={video.thumbnail} 
                alt={video.title}
                className={styles.thumbnailImage}
              />
              <div className={styles.playButton}>
                <svg width="60" height="60" viewBox="0 0 24 24" fill="none">
                  <circle cx="12" cy="12" r="10" fill="rgba(0,0,0,0.7)"/>
                  <polygon points="10,8 16,12 10,16" fill="white"/>
                </svg>
              </div>
            </div>
            <div className={styles.videoInfo}>
              <h3 className={styles.videoTitle}>{video.title}</h3>
              <p className={styles.videoDescription}>{video.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
