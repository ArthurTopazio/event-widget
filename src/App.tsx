import React from 'react';
import logo from './logo.svg';
import './App.css';
import AppRouter from './components/AppRouter';
import NavBar from './components/NavBar/NavBar';

function App() {
  return (
    <div className="App">
      <NavBar />
      <AppRouter />
    </div>
  );
}

export default App;
