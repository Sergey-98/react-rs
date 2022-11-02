import React, { useState, useEffect } from 'react';
import { ModalProps } from 'types/types';
import modStyles from './Modal.module.css';

export default function Modal(props: ModalProps) {
  const [onOpenModal, setOnOpenModal] = useState<boolean>(props.visible);

  useEffect(() => {
    setOnOpenModal(props.visible);
  }, [props]);

  const rootClasses = [modStyles.modal_wrapper];
  if (onOpenModal) {
    rootClasses.push(modStyles.active);
  }
  const { thumbnail, title, issueNumber, modified, prices } = props.val;
  return (
    <div className={rootClasses.join(' ')} onClick={() => setOnOpenModal(false)}>
      <div
        className={modStyles.modal_content}
        onClick={(event: React.MouseEvent<HTMLElement>) => event.stopPropagation()}
      >
        <img
          className={modStyles.poster}
          src={`${thumbnail.path}.${thumbnail.extension}`}
          alt="poster"
        />
        <div className={modStyles.modal_content_main_content}>
          <h1 className={modStyles.film__title}>{title}</h1>
          <h3 className={modStyles.film__subtitle}>Номер выпуска: {issueNumber}</h3>
          <h3 className={modStyles.film__subtitle}>Год выхода: {modified}</h3>
          <h3 className={modStyles.film__subtitle}>Цена: {prices[0].price}</h3>
        </div>
      </div>
    </div>
  );
}
