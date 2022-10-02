import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { routes } from '../router/index';
import { Props } from '../types/types';

class AppRouter extends React.Component<Record<string, React.ReactNode>, { value: string }> {
  constructor(props: Props) {
    super(props);
  }
  render() {
    return (
      <Routes>
        {routes.map((route) => (
          <Route path={route.path} element={<route.component />} key={route.path} />
        ))}
      </Routes>
    );
  }
}

export default AppRouter;
