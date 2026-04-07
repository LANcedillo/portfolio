import { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import { Home } from '../pages/Home';
// import { NotFound } from '../pages/NotFound';
import { PATHS } from './paths';

const LazyTicTacToe = lazy(() => import('../components/games/TicTacToe').then(module => ({ default: module.TicTacToe })));
const LazySpaceInvaders = lazy(() => import('../components/games/SpaceInvaders').then(module => ({ default: module.SpaceInvaders })));

export const AppRoutes = () => {
  return (
    <Suspense fallback={<div className="pt-32 text-center text-blue-500 font-bold">Cargando juego...</div>}>
      <Routes>
        {/* Usamos PATHS.HOME que es "/" */}
        <Route path={PATHS.HOME} element={<Home />} />

        {/* 🛠️ CORRECCIÓN AQUÍ: Accedemos a la propiedad .TIC_TAC_TOE que es el string */}
        <Route path={PATHS.GAMES.TIC_TAC_TOE} element={<LazyTicTacToe />} />
        
        {/* 🛠️ CORRECCIÓN AQUÍ: Accedemos a la propiedad .SPACE_INVADERS */}
        <Route path={PATHS.GAMES.SPACE_INVADERS} element={<LazySpaceInvaders />} />

        {/* 404 - Redirigir a Home o a tu página NotFound si ya la creaste */}
        <Route path="*" element={<Home />} />
      </Routes>
    </Suspense>
  );
};