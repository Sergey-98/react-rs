import React from 'react';
import { Films } from '../../types/types';
import Card from 'components/Card/Card';
import styles from './Cards.module.css';

class Cards extends React.Component<Films[], Films[]> {
  cards: React.ReactNode;

  constructor(props: Films[]) {
    super(props);
    this.state = Array.from(Object.values(this.props));
  }

  render() {
    return (
      <div className={styles.cards}>
        {this.state.map((card: Films) => (
          <Card value={card} key={card.imdbID} />
        ))}
      </div>
    );
  }
}

export default Cards;
