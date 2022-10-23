import React, { useState, useEffect } from 'react';
import classes from './UInput.module.css';
import UButton from '../button/UButton';

export default function Input(props: { placeholder: string }) {
  const [inputValue, setInputValue] = useState(localStorage.getItem('searchValue') ?? '');
  const inputHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };
  useEffect(() => {
    localStorage.setItem('searchValue', inputValue);
  });
  return (
    <div className={classes.myInput_wrapper}>
      <UButton />
      <input
        aria-label="searchPanel"
        className={classes.myInput}
        {...props}
        value={inputValue}
        onChange={inputHandler}
      />
      <div className={classes.myInput_close}></div>
    </div>
  );
}
