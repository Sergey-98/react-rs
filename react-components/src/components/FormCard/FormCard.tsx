import React from 'react';
import styles from './FormCard.module.css';
import { Card } from 'types/types';

class FormCard extends React.Component<{ value: Card }, object> {
  constructor(props: { value: Card }) {
    super(props);
  }
  render() {
    return (
      <div className={styles.form_card}>
        <img className={styles.form_poster} src={this.props.value.file} alt="poster" />
        <h2>
          {this.props.value.name} {this.props.value.surname}
        </h2>
        <span>Gender: {this.props.value.gender}</span>
        <span>Date: {this.props.value.date}</span>
        <span>e-mail: {this.props.value.email}</span>
      </div>
    );
  }
}

export default FormCard;
