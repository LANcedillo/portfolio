import { useLocation, useNavigate } from 'react-router-dom';

export const useSmartNavigation = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const handleNavigation = (path: string) => {
    // 1. Manejo de enlaces externos (LinkedIn, GitHub, etc.)
    if (path.startsWith('http')) {
      window.open(path, '_blank', 'noopener,noreferrer');
      return;
    }

    // 2. Manejo de enlaces con anclas (#proyectos, #contacto)
    if (path.includes('#')) {
      const [route, hash] = path.split('#');
      
      // Si ya estamos en la ruta (o estamos en home '/' y la ruta es vacía)
      const isSameRoute = location.pathname === route || (location.pathname === '/' && route === '');

      if (isSameRoute) {
        // Solo hacemos scroll suave al elemento
        const element = document.getElementById(hash);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      } else {
        // Si estamos en otra página (ej. un juego), navegamos a la ruta completa
        navigate(path);
      }
    } else {
      // 3. Navegación normal a otra página (ej. de Home a un Juego)
      navigate(path);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return { handleNavigation };
};