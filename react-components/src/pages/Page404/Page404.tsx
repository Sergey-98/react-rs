import React from 'react';
import { Link } from 'react-router-dom';
import classes from './Page404.module.css';

export default function Error() {
  return (
    <div className={classes.error_block}>
      <div className={classes.error_number_wrapper}>
        <div className={classes.error_number}>404</div>
      </div>
      <div className={classes.error_main_block}>
        <h1 className={classes.error_title}>Вы перешли на несуществующую страницу!</h1>
        <p className={classes.error_text_block}>
          Такое иногда случается! Самые вероятные причины - устаревшая ссылка или страница была
          удалена. Перейдите на <Link to="/">главную страницу</Link> и попробуйте начать оттуда.
        </p>
      </div>
    </div>
  );
}
