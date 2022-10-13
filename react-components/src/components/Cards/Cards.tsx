import React from 'react';
import { CardData } from '../../types/types';
import Card from 'components/Card/Card';
import styles from './Cards.module.css';

class Cards extends React.Component<CardData[], { data: CardData[] }> {
  cards: React.ReactNode;

  constructor(props: CardData[]) {
    super(props);
    this.state = { data: Object.values(this.props) };
  }

  componentDidUpdate(prevProps: CardData[]) {
    if (this.props !== prevProps) {
      this.setState({ data: Object.values(this.props) });
    }
  }

  render() {
    return (
      <div className={styles.cards}>
        {this.state.data.map((card: CardData) => (
          <Card value={card} key={card.episode_id} />
        ))}
      </div>
    );
  }
}

export default Cards;
