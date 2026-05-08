// src/App.tsx
import { useState } from 'react';
import { HashRouter} from 'react-router-dom';
import { Navbar } from './components/Navbar';
import {Footer} from './components/Footer';
import { AppRoutes } from './routes';
import { useScrollHandler } from './hooks/useScrollHandler';

const ScrollWatcher = () => {
  useScrollHandler(); // Ejecutamos el hook vigilante
  return null;
};
export default function App() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <HashRouter>
      <ScrollWatcher /> {/* Componente que solo ejecuta el hook de scroll */}
      <div className={darkMode ? '' : 'dark'}>
        <div className="min-h-screen bg-white dark:bg-slate-950 transition-colors duration-300">
          <Navbar darkMode={darkMode} 
          toggleDarkMode={() => setDarkMode(!darkMode)} />
          <AppRoutes />
          <Footer iconClass="w-6 h-6" size={24} />
        </div>
      </div>
    </HashRouter>
  );
}