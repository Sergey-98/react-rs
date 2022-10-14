import React from 'react';
import styles from './Card.module.css';
import { CardData } from 'types/types';

class Card extends React.Component<{ value: CardData }, object> {
  constructor(props: { value: CardData }) {
    super(props);
  }
  render() {
    const { title, director, release_date } = this.props.value;
    return (
      <div className={styles.card}>
        {/* <img className={styles.poster} src={this.props.value.Poster} alt="poster" /> */}
        <h1 className={styles.film__title}>Название: {title}</h1>
        <h3 className={styles.film__subtitle}>Директор: {director}</h3>
        <h3 className={styles.film__subtitle}>Год выхода: {release_date}</h3>
      </div>
    );
  }
}

export default Card;
