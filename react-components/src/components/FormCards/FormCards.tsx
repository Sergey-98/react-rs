import React from 'react';
import styles from './FormCards.module.css';
import { Card } from '../../types/types';
import FormCard from 'components/FormCard/FormCard';

class FormCards extends React.Component<Card[], { data: Card[] | [] }> {
  cards: React.ReactNode;

  constructor(props: Card[]) {
    super(props);
    this.state = { data: Object.values(this.props) };
  }

  componentDidUpdate(prevProps: Card[]) {
    if (this.props !== prevProps) {
      this.setState({ data: Object.values(this.props) });
    }
  }

  render() {
    return (
      <div className={styles.form_cards}>
        {this.state.data.map((card: Card) => (
          <FormCard value={card} key={card.name} />
        ))}
      </div>
    );
  }
}

export default FormCards;
