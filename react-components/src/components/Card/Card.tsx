import React from 'react';
import styles from './Card.module.css';
import { CardProps } from 'types/types';

class Card extends React.Component<CardProps, object> {
  constructor(props: CardProps) {
    super(props);
    this.state = { onOpenModal: false };
  }
  render() {
    const { Poster, Title } = this.props.value;
    return (
      <div className={styles.card} onClick={this.props.onOpenModal}>
        <img className={styles.poster} src={Poster} alt="poster" />
        <h1 className={styles.film__title}>Название: {Title}</h1>
      </div>
    );
  }
}

export default Card;
