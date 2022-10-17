import React from 'react';
import Cards from 'components/Cards/Cards';
import { Films } from '../types/types';
import { getFilms } from '../API/getService';
import Input from 'components/UI/input/UInput';

class BodyPageCards extends React.Component<Films, { data: Films[] }> {
  public input: Input;

  constructor(props: Films) {
    super(props);
    this.input = new Input({ children: null });
    this.state = {
      data: [],
    };
  }

  async get() {
    const string = this.input.getState();
    const search = !string.input ? null : string;
    return search?.input ? await getFilms(String(search.input)) : null;
  }

  async componentDidMount() {
    const param = await this.get();
    if (param) {
      this.setState({ data: param.data.Search.splice(1, 20) });
    }
  }

  render() {
    return this.state.data.length == 0 ? (
      <h1 className="message">Данные не найдены!</h1>
    ) : (
      <Cards {...this.state.data} />
    );
  }
}

export default BodyPageCards;
