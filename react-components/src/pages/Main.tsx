import React, { useState, useEffect } from 'react';
import UInput from '../components/UI/input/UInput';
import BodyPageCards from './BodyPageCards';

export default function Main() {
  const [option, setOption] = useState(false);

  useEffect(() => {
    if (localStorage.getItem('searchValue')) {
      setOption(true);
    }
  }, []);

  function changeValue() {
    const string = localStorage.getItem('searchValue');
    if (!string) {
      setOption(false);
    }
  }

  function onKeyDown(event: React.KeyboardEvent) {
    if (
      (event.code == 'Enter' || event.code == 'NumpadEnter') &&
      localStorage.getItem('searchValue')
    ) {
      setOption(true);
    } else if (
      (event.code == 'Enter' || event.code == 'NumpadEnter') &&
      !localStorage.getItem('searchValue')
    ) {
      setOption(false);
    }
  }

  return (
    <div onKeyDown={onKeyDown} onChange={changeValue}>
      <UInput placeholder="Search" />
      {option ? (
        <BodyPageCards />
      ) : (
        <h1 className="message">Для получения данных введите запрос!</h1>
      )}
    </div>
  );
}
