import React from 'react';
import UInput from '../components/UI/input/UInput';
import BodyPageCards from './BodyPageCards';

class Main extends React.Component {
  render() {
    return (
      <div>
        <UInput placeholder="Search" />
        <BodyPageCards />
      </div>
    );
  }
}

export default Main;
