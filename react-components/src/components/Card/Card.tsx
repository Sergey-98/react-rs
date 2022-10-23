import React from 'react';
import styles from './Card.module.css';
import { CardProps } from 'types/types';

export default function Card(props: CardProps) {
  const { Poster, Title } = props.value;
  return (
    <div className={styles.card} onClick={props.onOpenModal}>
      <img className={styles.poster} src={Poster} alt="poster" />
      <h1 className={styles.film__title}>Название: {Title}</h1>
    </div>
  );
}
