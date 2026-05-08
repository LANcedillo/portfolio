import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export const useScrollHandler = () => {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    // Si no hay hash, subimos al inicio (útil al cambiar entre juegos)
    if (!hash) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      // Si hay un hash, esperamos un poco a que el DOM cargue y hacemos scroll
      const id = hash.replace('#', '');
      const element = document.getElementById(id);
      
      if (element) {
        // Pequeño timeout para asegurar que React terminó de renderizar la sección
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      }
    }
  }, [pathname, hash]); // Se ejecuta cada vez que cambia la URL o el #
};