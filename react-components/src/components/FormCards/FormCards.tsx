import React from 'react';
import styles from './FormCards.module.css';
import { Card } from '../../types/types';
import FormCard from 'components/FormCard/FormCard';

export default function FormCards(props: Card[]) {
  return (
    <div className={styles.form_cards}>
      {Object.values(props).map((card: Card, id: number) => (
        <FormCard value={card} key={id} />
      ))}
    </div>
  );
}
