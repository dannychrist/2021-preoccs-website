import React, { useEffect } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useLocation,
} from 'react-router-dom';

// Components
import MainNavigation from './shared/components/Navigation/MainNavigation';
import Home from './pages/components/Home';
import Live from './pages/components/Live';
import Videos from './pages/components/Videos';
import Footer from './shared/components/Navigation/Footer';
import NotFound from './pages/components/NotFound';

import './App.css';

// ✅ Fix: Scroll to Top without withRouter
const ScrollToTop = ({ children }) => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return children;
};

const App = () => {
  return (
    <Router>
      <ScrollToTop>
        <MainNavigation />
        <div className='main-content'>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/video' element={<Videos />} />
            <Route path='/live' element={<Live />} />
            {/* ✅ Corrected 404 route for v6 */}
            <Route path='*' element={<NotFound />} />
          </Routes>
        </div>
        <Footer />
      </ScrollToTop>
    </Router>
  );
};

export default App;
