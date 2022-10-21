import React from 'react';
import Cards from 'components/Cards/Cards';
import { Films } from '../types/types';
import { getFilms } from '../API/getService';

class BodyPageCards extends React.Component<Films, { data: Films[] }> {
  maxCardsOnPage: number;

  constructor(props: Films) {
    super(props);
    this.state = {
      data: [],
    };
    this.maxCardsOnPage = 10;
  }

  async get() {
    const string = localStorage.getItem('searchValue');
    const search = !string ? null : string;
    return search ? await getFilms(String(search)) : null;
  }

  async componentDidMount() {
    const param = await this.get();
    if (param) {
      this.setState({ data: param.data.Search.slice(0, this.maxCardsOnPage) });
    }
  }

  render() {
    if (this.state.data.length == 0) {
      return <h1 className="message">Для получения данных введите запрос!</h1>;
    } else {
      return <Cards {...this.state.data} />;
    }
  }
}

export default BodyPageCards;
