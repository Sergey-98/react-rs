import React from 'react';
import classes from './UButton.module.css';
import { Props } from 'types/types';

export default function UButton(props: Props) {
  const postLocalStorage = () => {
    // if (!localStorage.getItem('searchValue')) {
    //   localStorage.setItem('searchValue', item);
    // }
  };
  return (
    <button
      onClick={() => {
        postLocalStorage();
      }}
      className={classes.myBtn}
    >
      {props.children}
    </button>
  );
}
