import React from 'react';
import { Films } from '../../types/types';
import Card from 'components/Card/Card';
import styles from './Cards.module.css';
import Modal from 'components/Modal/Modal';

class Cards extends React.Component<Films[], { classModal: boolean; id: number }> {
  cards: React.ReactNode;

  constructor(props: Films[]) {
    super(props);
    this.state = { classModal: false, id: 0 };
  }

  changeModalVisible = (id: number) => {
    this.setState({ classModal: true, id: id });
  };

  render() {
    return Object.values(this.props).length === 0 ? (
      <h1 className="message">Загрузка...</h1>
    ) : (
      <div className={styles.cards}>
        {Object.values(this.props).map((card: Films, id: number) => (
          <Card value={card} key={String(id)} onOpenModal={() => this.changeModalVisible(id)} />
        ))}
        <Modal val={Object.values(this.props)[this.state.id]} visible={this.state.classModal} />
      </div>
    );
  }
}

export default Cards;
