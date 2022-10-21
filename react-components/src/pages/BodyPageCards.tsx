import React, { useState, useEffect } from 'react';
import Cards from 'components/Cards/Cards';
// import { Films } from '../types/types';
import { getFilms } from '../API/getService';
import { maxCardsOnPage } from 'Constants/Constants';

export default function BodyPageCards() {
  const [data, setData] = useState([]);
  useEffect(() => {
    async function fetchData() {
      const param = await get();
      if (param) {
        setData(param.data.Search.splice(1, maxCardsOnPage));
      }
    }
    fetchData();
  }, []);

  return data.length == 0 ? <h1 className="message">Данные не найдены!</h1> : <Cards {...data} />;
}

async function get() {
  const string = localStorage.getItem('searchValue');
  const search = !string ? null : string;
  return search ? await getFilms(String(search)) : null;
}
