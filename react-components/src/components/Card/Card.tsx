import React from 'react';
import styles from './Card.module.css';
import { Films } from 'types/types';

class Card extends React.Component<{ value: Films }, object> {
  constructor(props: { value: Films }) {
    super(props);
  }
  render() {
    return (
      <div className={styles.card}>
        <img className={styles.poster} src={this.props.value.Poster} alt="poster" />
        <h1 className={styles.film__title}>Название: {this.props.value.Title}</h1>
        <h3 className={styles.film__subtitle}>Жанр: {this.props.value.Type}</h3>
        <h3 className={styles.film__subtitle}>Год выхода: {this.props.value.Year}</h3>
      </div>
    );
  }
}

export default Card;
