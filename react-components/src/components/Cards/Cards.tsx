import React from 'react';
import { Films } from '../../types/types';
import Card from 'components/Card/Card';
import styles from './Cards.module.css';

class Cards extends React.Component<Films[]> {
  render() {
    const state = Array.from(Object.values(this.props));
    return (
      <div className={styles.cards}>
        {state.map((card: Films) => (
          <Card value={card} key={card.imdbID} />
        ))}
      </div>
    );
  }
}

export default Cards;
