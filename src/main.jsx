import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import App from './App';
import { ThemeProvider } from './context/ThemeProvider';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router>     
        <ThemeProvider>         
            <Routes>
              <Route path="/*" element={<App />} />
            </Routes>
        </ThemeProvider>
    </Router>
  </React.StrictMode>
);
