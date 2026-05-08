import { Sun, Moon, Menu, X } from 'lucide-react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { PortfolioIcon } from './icons/IconDemo';
import { useSmartNavigation } from '../hooks/useSmartNavigation';
import { PATHS } from '../routes/paths'; 

export const Navbar = ({ darkMode, toggleDarkMode }: { darkMode: boolean, toggleDarkMode: () => void }) => {
  const [isOpen, setIsOpen] = useState(false);
  const { handleNavigation } = useSmartNavigation(); // Hook de navegación inteligente

  const menu_elements = [
    { name: 'Inicio', href: PATHS.HOME },
    { name: 'Proyectos', href: PATHS.PROJECTS },
    { name: 'Contacto', href: PATHS.CONTACT },
  ];
  
  return (
    <>
      <nav className="fixed top-0 w-full z-50 bg-white/90 dark:bg-slate-950/90 backdrop-blur-md border-b border-slate-200 dark:border-slate-800">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          
          {/* LOGO - Usa Link para volver al inicio siempre */}
          <Link to="/" className="text-xl font-bold bg-linear-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent flex items-center">
            <PortfolioIcon className="w-8 h-8 mr-1" /> LACN
          </Link>

          {/* MENÚ ESCRITORIO - Cambiamos <a> por <button> para manejar la lógica */}
          <div className="hidden md:flex gap-8">
            {menu_elements.map((item) => (
              <button 
                key={item.name} 
                onClick={() => handleNavigation(item.href)}
                className="text-sm font-medium hover:text-blue-600 dark:text-slate-300 transition-colors cursor-pointer"
              >
                {item.name}
              </button>
            ))}
          </div>

          <div className="flex items-center gap-2 md:gap-4">
            <button onClick={toggleDarkMode} className="p-2 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-yellow-400 hover:ring-2 ring-blue-500/20 transition-all cursor-pointer">
              {darkMode ? <Sun size={20} /> : <Moon size={20} />}
            </button>

            <button onClick={() => setIsOpen(!isOpen)} className="md:hidden p-2 text-slate-600 dark:text-slate-300">
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>

        {/* MENÚ MÓVIL */}
        {isOpen && (
          <div className="md:hidden bg-white dark:bg-slate-950 border-b border-slate-200 dark:border-slate-800 p-6 flex flex-col gap-4">
            {menu_elements.map((item) => (
              <button 
                key={item.name} 
                onClick={() => {
                  handleNavigation(item.href);
                  setIsOpen(false); // Cerramos el menú al hacer clic
                }}
                className="text-left text-lg font-medium dark:text-slate-300"
              >
                {item.name}
              </button>
            ))}
          </div>
        )}
      </nav>
    </>
  );
};