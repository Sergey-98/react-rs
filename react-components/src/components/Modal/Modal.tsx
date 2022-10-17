import React from 'react';
import { Films } from 'types/types';
import modStyles from './Modal.module.css';

class Modal extends React.Component<{ val: Films; visible: boolean }, { onOpenModal: boolean }> {
  constructor(props: { val: Films; visible: boolean }) {
    super(props);
    this.state = { onOpenModal: this.props.visible };
  }

  componentDidUpdate(prevProps: { val: Films; visible: boolean }) {
    if (this.props !== prevProps) {
      this.setState({ onOpenModal: this.props.visible });
    }
  }

  render() {
    const rootClasses = [modStyles.modal_wrapper];
    if (this.state.onOpenModal) {
      rootClasses.push(modStyles.active);
    }
    const { Poster, Title, Type, Year, imdbID } = this.props.val;
    return (
      <div className={rootClasses.join(' ')} onClick={() => this.setState({ onOpenModal: false })}>
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
}

export default Modal;
