import React, { useEffect } from 'react';

import {
  BrowserRouter as Router,
  Route,
  Switch,
  useLocation,
  withRouter,
} from 'react-router-dom';

// Components
import MainNavigation from './shared/components/Navigation/MainNavigation';
import Home from './pages/components/Home';
import Live from './pages/components/Live';
import Videos from './pages/components/Videos';
import Footer from './shared/components/Navigation/Footer';

import './App.css';

function _ScrollToTop(props) {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return props.children;
}
const ScrollToTop = withRouter(_ScrollToTop);

const App = () => {
  return (
    <>
      <Router>
        <ScrollToTop>
          <MainNavigation />
          <div className='main-content'>
            <Switch>
              <Route path='/' exact>
                <Home />
              </Route>
              <Route path='/video'>
                <Videos />
              </Route>
              <Route path='/live'>
                <Live />
              </Route>
            </Switch>
          </div>
          <Footer />
        </ScrollToTop>
      </Router>
    </>
  );
};

export default App;
