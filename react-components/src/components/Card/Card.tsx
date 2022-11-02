import React from 'react';
import styles from './Card.module.css';
import { CardProps } from 'types/types';

export default function Card(props: CardProps) {
  const { title, thumbnail } = props.value;
  return (
    <div className={styles.card} onClick={props.onOpenModal}>
      <img
        className={styles.poster}
        src={`${thumbnail.path}.${thumbnail.extension}`}
        alt="poster"
      />
      <h1 className={styles.film__title}>{title}</h1>
    </div>
  );
}
