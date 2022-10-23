import React from 'react';
import styles from './FormCard.module.css';
import { Card } from 'types/types';

export default function FormCard(props: { value: Card }) {
  return (
    <div className={styles.form_card}>
      <img className={styles.form_poster} src={props.value.file} alt="poster" />
      <h2>
        {props.value.name} {props.value.surname}
      </h2>
      <span>Gender: {props.value.gender}</span>
      <span>Date: {props.value.date}</span>
      <span>e-mail: {props.value.email}</span>
    </div>
  );
}
