import React, { useState, useEffect } from 'react';
import Cards from 'components/Cards/Cards';
import { getAllComics } from '../API/getService';
import { CardComicsProps } from 'types/types';

export default function BodyPageCards() {
  const [data, setData] = useState<CardComicsProps[]>([]);
  useEffect(() => {
    async function fetchData() {
      const param = await get();
      console.log(param);
      if (param) {
        setData(param);
      }
    }
    fetchData();
  }, []);

  return data.length == 0 ? <h1 className="message">Данные не найдены!</h1> : <Cards {...data} />;
}

async function get() {
  return await getAllComics(9, 210);
}
