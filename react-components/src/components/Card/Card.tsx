import React from 'react';
import styles from './Card.module.css';
import { CardData } from 'types/types';

class Card extends React.Component<{ value: CardData }, object> {
  constructor(props: { value: CardData }) {
    super(props);
  }
  render() {
    return (
      <div className={styles.card}>
        {/* <img className={styles.poster} src={this.props.value.Poster} alt="poster" /> */}
        <h1 className={styles.film__title}>Название: {this.props.value.title}</h1>
        <h3 className={styles.film__subtitle}>Директор: {this.props.value.director}</h3>
        <h3 className={styles.film__subtitle}>Год выхода: {this.props.value.release_date}</h3>
      </div>
    );
  }
}

export default Card;
