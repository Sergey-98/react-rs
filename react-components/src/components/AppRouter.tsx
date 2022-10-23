import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { routes } from '../router/index';

export default function AppRouter() {
  return (
    <Routes>
      {routes.map((route) => (
        <Route path={route.path} element={<route.component />} key={route.path} />
      ))}
    </Routes>
  );
}
