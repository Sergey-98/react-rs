import React from 'react';
import Cards from 'components/Cards/Cards';
import { Films } from '../types/types';
import getService from '../API/getService';
import Input from 'components/UI/input/UInput';

class BodyPageCards extends React.Component<Films, { data: Films[] | [] }> {
  public getService: getService;
  public input: Input;

  constructor(props: Films) {
    super(props);
    this.input = new Input({ children: null });
    this.getService = new getService();
    this.state = {
      data: [],
    };
  }

  async get() {
    const string = this.input.getState();
    const search = !string.input ? null : string;
    return search?.input ? await getService.getFilms(String(search.input)) : null;
  }

  async componentDidMount() {
    const param = await this.get();
    console.log(param);
    if (param) {
      console.log(param);
      this.setState({ data: param.data.Search.splice(0, 10) });
    }
  }

  render() {
    console.log(this.state.data);
    if (this.state.data.length == 0) {
      return <h1>Для получения данных введите запрос!</h1>;
    } else {
      return <Cards {...this.state.data} />;
    }
  }
}

export default BodyPageCards;
