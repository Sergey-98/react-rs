import React from 'react';
import { Films } from '../../types/types';
import Card from 'components/Card/Card';
import styles from './Cards.module.css';
import Modal from 'components/Modal/Modal';

class Cards extends React.Component<Films[], { data: Films[]; classModal: boolean; id: number }> {
  cards: React.ReactNode;

  constructor(props: Films[]) {
    super(props);
    this.state = { data: Object.values(this.props), classModal: false, id: 0 };
  }

  componentDidUpdate(prevProps: Films[]) {
    if (this.props !== prevProps) {
      this.setState({ data: Object.values(this.props) });
    }
  }

  changeModalVisible = (id: number) => {
    this.setState({ classModal: true, id: id });
  };

  render() {
    return this.state.data.length === 0 ? (
      <h1 className="message">Загрузка...</h1>
    ) : (
      <div className={styles.cards}>
        {this.state.data.map((card: Films, id: number) => (
          <Card value={card} key={String(id)} onOpenModal={() => this.changeModalVisible(id)} />
        ))}
        <Modal val={this.state.data[this.state.id]} visible={this.state.classModal} />
      </div>
    );
  }
}

export default Cards;
