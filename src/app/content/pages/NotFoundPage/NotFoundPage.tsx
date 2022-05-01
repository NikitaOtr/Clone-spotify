import React from 'react';
import s from './NotFoundPage.module.scss';

import { Link } from 'react-router-dom';

export const NotFoundPage = () => {
    return (
        <div className={s.container}>
            <h1>Страница не найдена</h1>
            <Link to='/' className={s.link}>Главная</Link>
        </div>
    );
};