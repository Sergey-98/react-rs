import React from 'react';
import classes from './UInput.module.css';
import { Props } from 'types/types';

class Input extends React.Component<Record<string, React.ReactNode>, { input: string }> {
  constructor(props: Props) {
    super(props);
    this.state = {
      input: localStorage.getItem('searchValue') ?? '',
    };
  }
  componentDidUpdate() {
    localStorage.setItem('searchValue', this.state.input);
  }
  getState() {
    return this.state;
  }
  render() {
    const inputHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
      // console.log(event.target.value);
      this.setState({ input: event.target.value });
    };
    return (
      <div className={classes.myInput_wrapper}>
        <div className={classes.myInput_search}></div>
        <input
          aria-label="searchPanel"
          className={classes.myInput}
          {...this.props}
          value={this.state.input}
          onChange={inputHandler}
        />
        <div className={classes.myInput_close}></div>
      </div>
    );
  }
}

export default Input;
