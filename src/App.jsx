import { useEffect } from 'react';
import { Navigate, Route, Routes, useLocation } from 'react-router-dom';
import './css/style.css';
import './css/additional-styles/animations.css';
import Layout from './pages/Layout';
import Jewelry from './pages/Jewelry';



function App() {
  const location = useLocation();

  useEffect(() => {
    document.querySelector('html').style.scrollBehavior = 'auto';
    window.scroll({ top: 0 });
    document.querySelector('html').style.scrollBehavior = '';
  }, [location.pathname]); // triggered on route change

  return (
    <Routes>
            <Route path="/" element={<Layout />} />
            <Route path="/jewelry" element={<Jewelry/>} />
            <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
}

export default App;
