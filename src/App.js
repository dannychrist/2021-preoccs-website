import React, { useEffect, Suspense, lazy } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useLocation,
} from 'react-router-dom';

import LoadingSpinner from './shared/components/UIElements/LoadingSpinner';
import './App.css';

// Lazy-loaded Components
const MainNavigation = lazy(() =>
  import('./shared/components/Navigation/MainNavigation')
);
const Home = lazy(() => import('./pages/components/Home'));
const Live = lazy(() => import('./pages/components/Live'));
const Videos = lazy(() => import('./pages/components/Videos'));
const Footer = lazy(() => import('./shared/components/Navigation/Footer'));
const NotFound = lazy(() => import('./pages/components/NotFound'));

// ✅ Scroll to Top when navigating pages
const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null; // Nothing to render, just a side effect
};

const App = () => {
  return (
    <Router future={{ v7_startTransition: true, v7_relativeSplatPath: true }}>
      <Suspense fallback={<LoadingSpinner />}>
        <MainNavigation />
        <ScrollToTop />
        <div className='main-content'>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/video' element={<Videos />} />
            <Route path='/live' element={<Live />} />
            <Route path='*' element={<NotFound />} />
          </Routes>
        </div>
        <Footer />
      </Suspense>
    </Router>
  );
};

export default App;
