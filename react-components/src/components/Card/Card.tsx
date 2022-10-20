import React from 'react';
import styles from './Card.module.css';
import { Films } from 'types/types';

class Card extends React.Component<{ value: Films }, object> {
  constructor(props: { value: Films }) {
    super(props);
  }
  render() {
    const { Poster, Title, Type, Year } = this.props.value;
    return (
      <div className={styles.card}>
        <img className={styles.poster} src={Poster} alt="poster" />
        <h1 className={styles.film__title}>Название: {Title}</h1>
        <h3 className={styles.film__subtitle}>Жанр: {Type}</h3>
        <h3 className={styles.film__subtitle}>Год выхода: {Year}</h3>
      </div>
    );
  }
}

export default Card;
