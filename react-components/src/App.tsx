import React from 'react';
import './styles/App.css';
import { BrowserRouter } from 'react-router-dom';
import Navbar from 'components/UI/Navbar/Navbar';
import AppRouter from 'components/AppRouter';

export default function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <AppRouter />
      </BrowserRouter>
    </div>
  );
}
