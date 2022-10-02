import React from 'react';
import './styles/App.css';
import { BrowserRouter } from 'react-router-dom';
import Navbar from 'components/UI/Navbar/Navbar';
import AppRouter from 'components/AppRouter';
// import Main from './pages/Main';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <Navbar />
          <AppRouter />
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
