import React from 'react';
import UInput from '../components/UI/input/UInput';
import BodyPageCards from './BodyPageCards';
import { Films } from 'types/types';
import Input from 'components/UI/input/UInput';

class Main extends React.Component<Films, { option: boolean }> {
  public input: Input;

  constructor(props: Films) {
    super(props);
    this.input = new Input({ children: null });
    this.state = { option: false };
  }

  componentDidMount() {
    if (localStorage.getItem('searchValue')) {
      this.setState({ option: true });
    }
  }

  render() {
    const onKeyDown = (event: React.KeyboardEvent) => {
      if (
        (event.code == 'Enter' || event.code == 'NumpadEnter') &&
        localStorage.getItem('searchValue')
      ) {
        this.setState({ option: true });
      } else if (
        (event.code == 'Enter' || event.code == 'NumpadEnter') &&
        !localStorage.getItem('searchValue')
      ) {
        this.setState({ option: false });
      }
    };

    const changeValue = () => {
      const string = localStorage.getItem('searchValue');
      if (!string) {
        this.setState({ option: false });
      }
    };

    return (
      <div onKeyDown={onKeyDown} onChange={changeValue}>
        <UInput placeholder="Search" />
        {this.state.option ? (
          <BodyPageCards />
        ) : (
          <h1 className="message">Для получения данных введите запрос!</h1>
        )}
      </div>
    );
  }
}

export default Main;
