import React from 'react';
import { Routes } from 'react-router-dom';

const AppRouter = () => {

  const auth = true;

  return (
    auth === true
      ? <Routes></Routes>
      : <Routes></Routes>
  )
};

export default AppRouter;
