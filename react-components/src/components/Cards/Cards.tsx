import React, { useState } from 'react';
import { Films } from '../../types/types';
import Card from 'components/Card/Card';
import styles from './Cards.module.css';
import Modal from 'components/Modal/Modal';

export default function Cards(props: Films[]) {
  const [modalClass, setModalClass] = useState<boolean>(false);
  const [id, setId] = useState<number>(0);

  const changeModalVisible = (id: number) => {
    setModalClass(true);
    setId(id);
  };

  return Object.values(props).length === 0 ? (
    <h1 className="message">Загрузка...</h1>
  ) : (
    <div className={styles.cards}>
      {Object.values(props).map((card: Films, id: number) => (
        <Card value={card} key={String(id)} onOpenModal={() => changeModalVisible(id)} />
      ))}
      <Modal val={Object.values(props)[id]} visible={modalClass} />
    </div>
  );
}
