import React from 'react';
import Cards from 'components/Cards/Cards';
import { CardData } from '../types/types';
import { getSearchData } from '../API/getService';
import Input from 'components/UI/input/UInput';

class BodyPageCards extends React.Component<CardData, { data: CardData[] | [] }> {
  public input: Input;

  constructor(props: CardData) {
    super(props);
    this.input = new Input({ children: null });
    this.state = {
      data: [],
    };
  }

  async get() {
    const string = this.input.getState();
    const search = !string.input ? null : string;
    console.log(await getSearchData(String(search?.input)));
    return search?.input ? await getSearchData(String(search.input)) : null;
  }

  async componentDidMount() {
    const param = await this.get();
    if (param) {
      console.log(param);
      this.setState({ data: param.data.results });
    }
  }

  render() {
    console.log(this.state.data);
    // if (this.state.data.length == 0) {
    //   return <h1 className="message">Для получения данных введите запрос!</h1>;
    // } else {
    return this.state.data.length == 0 ? <h1>Загрузка...</h1> : <Cards {...this.state.data} />;
    // }
  }
}

export default BodyPageCards;
