
import React from 'react';
import { HashRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Simulator from './pages/Simulator';
import Locator from './pages/Locator';
import HelpCenter from './pages/HelpCenter';
import Appointments from './pages/Appointments';
import Login from './pages/Login';
import SelectLoan from './pages/SelectLoan';
import { Page } from './types';

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route element={<Layout />}>
          <Route path={Page.Home} element={<Home />} />
          <Route path={Page.Simulator} element={<Simulator />} />
          <Route path={Page.Locator} element={<Locator />} />
          <Route path={Page.Help} element={<HelpCenter />} />
          <Route path={Page.Appointments} element={<Appointments />} />
          <Route path={Page.SelectLoan} element={<SelectLoan />} />
        </Route>
        <Route path={Page.Login} element={<Login />} />
        <Route path="*" element={<Navigate to={Page.Home} replace />} />
      </Routes>
    </Router>
  );
};

export default App;
