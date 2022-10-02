import React from 'react';
import cl from './Loader.module.css';
import { Props } from 'types/types';

class Loader extends React.Component<Record<string, React.ReactNode>, { value: string }> {
  constructor(props: Props) {
    super(props);
  }
  render() {
    return <div className={cl.loader}></div>;
  }
}

export default Loader;
