import React from 'react';
import classes from './UButton.module.css';
import { Props } from 'types/types';

class UButton extends React.Component<Record<string, React.ReactNode>, { value: string }> {
  constructor(props: Props) {
    super(props);
  }
  postLocalStorage(item: string) {
    if (!localStorage.getItem('searchValue')) {
      localStorage.setItem('searchValue', item);
    }
  }
  render() {
    return (
      <button
        onClick={() => {
          this.postLocalStorage('one');
        }}
        className={classes.myBtn}
      >
        {this.props.children}
      </button>
    );
  }
}

export default UButton;
