import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';

describe('App', () => {
  it('render App component', () => {
    render(<App />);
    expect(screen.getByPlaceholderText(/Search/i)).toBeInTheDocument();
    expect(screen.getByText(/Главная/i)).toBeInTheDocument();
  });

  it('input focus', () => {
    render(<App />);
    const input = screen.getByPlaceholderText(/Search/i);
    expect(input).not.toHaveFocus();
    input.focus();
    expect(input).toHaveFocus();
  });

  it('React router', () => {
    render(<App />);
    userEvent.click(screen.getByText(/О сайте/i));
    expect(screen.getByText(/React Components/i)).toBeInTheDocument();
  });
});
