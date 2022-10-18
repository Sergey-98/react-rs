import React from 'react';
import cl from './Loader.module.css';

class Loader extends React.Component {
  render() {
    return <div className={cl.loader}></div>;
  }
}

export default Loader;
