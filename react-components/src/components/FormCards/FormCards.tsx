import React from 'react';
import styles from './FormCards.module.css';
import { Card } from '../../types/types';
import FormCard from 'components/FormCard/FormCard';

class FormCards extends React.Component<Card[], { data: Card[] }> {
  cards: React.ReactNode;

  render() {
    return (
      <div className={styles.form_cards}>
        {Object.values(this.props).map((card: Card) => (
          <FormCard value={card} key={card.name} />
        ))}
      </div>
    );
  }
}

export default FormCards;
