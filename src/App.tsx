import "./index.css";
import { Header } from './components/Header';
import { Inicio } from './components/Inicio';
import { Somos } from './components/Somos'; // Nuevo import
import { ProyectosYAcciones } from './components/ProyectosYAcciones'; // Nombre cambiado
import { Residencias } from './components/Residencias';
import { FormacionYMediacion } from './components/FormacionYMediacion'; // Nombre cambiado
import { PublicacionesYCirculaciones } from './components/PublicacionesYCirculaciones'; // Nombre cambiado
import { Videos } from './components/Videos'; // Nuevo import
import { Error404 } from './components/Error404'; // Nuevo import
import { SwipeLayer } from './components/SwipeLayer';
import { SomosInterna } from './pages/SomosInterna'; // Página interna de Somos
import { Exploraciones } from './components/Exploraciones'; // Componente de fuego/exploraciones
import React, { useRef, useEffect, useState } from 'react';

export function App() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const sectionRefs = useRef<Array<HTMLDivElement | null>>([]);
  const currentSectionIndex = useRef(0);
  const canScroll = useRef(true);
  const SCROLL_COOLDOWN = 600;
  const [show404, setShow404] = useState(false);
  const [showSomosInterna, setShowSomosInterna] = useState(false);
  const [isSwiping, setIsSwiping] = useState(false);
  const scrollPosition = useRef(0);
  const SCROLL_SPEED = 0.80; // Factor de velocidad del scroll horizontal (ajustable para más/menos velocidad)

  const triggerSwipe = () => {
    setIsSwiping(true);
  };

  const scrollToSection = (index: number) => {
    if (sectionRefs.current[index]) {
      sectionRefs.current[index]?.scrollIntoView({
        behavior: 'smooth',
        block: 'nearest',
        inline: 'start',
      });
    }
  };

  useEffect(() => {
    // Evita configurar el scroll mientras se muestra la 404 o la página interna
    if (show404 || showSomosInterna) {
      return;
    }

    // Inicializar la posición de scroll
    if (scrollContainerRef.current) {
      scrollPosition.current = scrollContainerRef.current.scrollLeft;
    }

    // Sincronizar scrollPosition con el scroll real del contenedor
    // Solo actualiza el tracking, no interfiere con el scroll manual
    const handleScroll = () => {
      if (scrollContainerRef.current) {
        const newScrollLeft = scrollContainerRef.current.scrollLeft;
        scrollPosition.current = newScrollLeft;
        
        // Actualizar el índice de sección basado en la posición real
        const sectionWidth = scrollContainerRef.current.clientWidth;
        const newIndex = Math.floor(newScrollLeft / sectionWidth);
        const numberOfSections = sectionRefs.current.length;
        currentSectionIndex.current = Math.max(0, Math.min(numberOfSections - 1, newIndex));
      }
    };

    const handleWheel = (event: WheelEvent) => {
      const delta = event.deltaY;
      const numberOfSections = sectionRefs.current.length;

      // Modo "L": en Videos (índice 6) permitir scroll vertical,
      // pero si el usuario hace scroll hacia arriba en el tope, volver a horizontal.
      if (currentSectionIndex.current === 6) {
        const videosEl = sectionRefs.current[6];
        if (!videosEl) return;

        // Asegura que el contenedor de videos sea scrollable verticalmente
        // sin afectar otras secciones
        (videosEl as HTMLElement).style.overflowY = 'auto';
        (videosEl as HTMLElement).style.scrollBehavior = 'auto';

        const atTop = (videosEl as HTMLElement).scrollTop <= 0;
        const canScrollDown = (videosEl as HTMLElement).scrollTop + (videosEl as HTMLElement).clientHeight < (videosEl as HTMLElement).scrollHeight;

        if (delta < 0 && atTop) {
          // En el tope y scrollea hacia arriba: volvemos a la sección anterior (horizontal)
          event.preventDefault();
          const newIndex = Math.max(0, currentSectionIndex.current - 1);
          if (newIndex !== currentSectionIndex.current && canScroll.current) {
            currentSectionIndex.current = newIndex;
            scrollToSection(currentSectionIndex.current);
            canScroll.current = false;
            setTimeout(() => { canScroll.current = true; }, SCROLL_COOLDOWN);
          }
          return;
        }

        // Si no está en el tope y va hacia abajo (o sube dentro del contenido),
        // dejamos el scroll vertical natural.
        if (delta > 0 && canScrollDown) {
          return; // vertical natural dentro de videos
        }
        if (delta < 0 && !(atTop)) {
          return; // vertical natural hacia arriba dentro de videos
        }

        // En el fondo o sin más contenido, no bloqueamos; dejamos que el navegador maneje
        return;
      }

      // Resto de secciones: comportamiento horizontal gradual y continuo
      event.preventDefault();
      if (scrollContainerRef.current) {
        const container = scrollContainerRef.current;
        const maxScroll = container.scrollWidth - container.clientWidth;
        
        // Obtener la posición actual del scroll directamente del DOM
        const currentScroll = container.scrollLeft;
        
        // Calcular el desplazamiento basado en el delta del scroll
        // El desplazamiento es proporcional al movimiento del mouse
        // Usar el delta directamente para un movimiento natural y gradual
        const scrollDelta = delta * SCROLL_SPEED;
        let newScrollPosition = currentScroll + scrollDelta;
        
        // Limitar al rango válido
        newScrollPosition = Math.max(0, Math.min(maxScroll, newScrollPosition));
        
        // Aplicar el desplazamiento directamente para un movimiento completamente fluido
        // Esto permite estar entre secciones y ver partes de dos secciones
        // Usar scrollLeft directamente evita cualquier animación o snap
        container.scrollLeft = newScrollPosition;
        
        // El índice se actualizará automáticamente en handleScroll cuando el navegador
        // dispare el evento scroll, no necesitamos actualizarlo aquí
      }
    };

    const container = scrollContainerRef.current;
    if (container) {
      container.addEventListener('wheel', handleWheel, { passive: false });
      container.addEventListener('scroll', handleScroll, { passive: true });
    }

    return () => {
      if (container) {
        container.removeEventListener('wheel', handleWheel);
        container.removeEventListener('scroll', handleScroll);
      }
    };
  }, [show404, showSomosInterna]);

  const handleShow404 = () => {
    triggerSwipe();
    setTimeout(() => setShow404(true), 1000);
  };

  const handleHide404 = () => {
    setShow404(false);
  };

  const handleShowSomosInterna = () => {
    triggerSwipe();
    setTimeout(() => setShowSomosInterna(true), 1000);
  };

  const handleHideSomosInterna = () => {
    setShowSomosInterna(false);
  };

  if (show404) {
    return <Error404 onGoHome={handleHide404} />;
  }

  if (showSomosInterna) {
    return <SomosInterna onGoBack={handleHideSomosInterna} />;
  }

  return (
    <>
      {isSwiping && <SwipeLayer onFinish={() => setIsSwiping(false)} />}
      <Exploraciones onShow404={handleShow404} />
      <Header scrollRef={scrollContainerRef as React.RefObject<HTMLDivElement>} />
      <div
        ref={scrollContainerRef}
        className="flex h-screen w-screen overflow-x-auto"
        style={{ 
          scrollBehavior: 'auto',
          scrollbarWidth: 'none', // Firefox
          msOverflowStyle: 'none', // IE/Edge
        }}
      >
        {/* Sección Inicio */}
        <div id="inicio" ref={el => {
          if (el) sectionRefs.current[0] = el;
        }} className="w-screen h-screen flex-shrink-0 flex flex-col items-center justify-center bg-blue-100">
          <Inicio />
        </div>

        {/* Sección Somos */}
        <div id="somos" ref={el => {
          if (el) sectionRefs.current[1] = el;
        }} className="w-screen h-screen flex-shrink-0 flex flex-col items-center justify-center bg-green-100">
          <Somos onShowSomosInterna={handleShowSomosInterna} />
        </div>

        {/* Sección Proyectos y Acciones */}
        <div id="proyectosYAcciones" ref={el => {
          if (el) sectionRefs.current[2] = el;
        }} className="w-screen h-screen flex-shrink-0 text-white">
          <ProyectosYAcciones onShow404={handleShow404} />
        </div>

        {/* Sección Residencias */}
        <div id="residencias" ref={el => {
          if (el) sectionRefs.current[3] = el;
        }} className="w-screen h-screen flex-shrink-0">
          <Residencias onShow404={handleShow404} onSwipe={triggerSwipe} />
        </div>

        {/* Sección Formación y Mediación */}
        <div id="formacionYMediacion" ref={el => {
          if (el) sectionRefs.current[4] = el;
        }} className="w-screen h-screen flex-shrink-0 bg-[#f2dc40]">
          <FormacionYMediacion onShow404={handleShow404} onSwipe={triggerSwipe} />
        </div>

        {/* Sección Publicaciones y Circulaciones */}
        <div id="publicacionesYCirculaciones" ref={el => {
          if (el) sectionRefs.current[5] = el;
        }} className="w-screen h-screen flex-shrink-0">
          <PublicacionesYCirculaciones onShow404={handleShow404} onSwipe={triggerSwipe} />
        </div>

        {/* Sección Videos */}
        <div id="videos" ref={el => {
          if (el) sectionRefs.current[6] = el;
        }} className="w-screen h-screen flex-shrink-0">
          <Videos onShow404={handleShow404} onSwipe={triggerSwipe} />
        </div>
      </div>
    </>
  );
}

export default App;