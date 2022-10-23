import React, { useState, useEffect } from 'react';
import { Films } from 'types/types';
import modStyles from './Modal.module.css';

export default function Modal(props: { val: Films; visible: boolean }) {
  const [onOpenModal, setOnOpenModal] = useState<boolean>(props.visible);

  useEffect(() => {
    setOnOpenModal(props.visible);
  }, [props]);

  const rootClasses = [modStyles.modal_wrapper];
  if (onOpenModal) {
    rootClasses.push(modStyles.active);
  }
  const { Poster, Title, Type, Year, imdbID } = props.val;
  return (
    <div className={rootClasses.join(' ')} onClick={() => setOnOpenModal(false)}>
      <div
        className={modStyles.modal_content}
        onClick={(event: React.MouseEvent<HTMLElement>) => event.stopPropagation()}
      >
        <img className={modStyles.poster} src={Poster} alt="poster" />
        <div className={modStyles.modal_content_main_content}>
          <h1 className={modStyles.film__title}>{Title}</h1>
          <h3 className={modStyles.film__subtitle}>Жанр: {Type}</h3>
          <h3 className={modStyles.film__subtitle}>Год выхода: {Year}</h3>
          <h3 className={modStyles.film__subtitle}>IMDbID: {imdbID}</h3>
        </div>
      </div>
    </div>
  );
}
