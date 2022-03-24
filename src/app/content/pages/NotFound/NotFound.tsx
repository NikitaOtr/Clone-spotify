import React from 'react';
import { Link } from 'react-router-dom';

import s from './NotFound.module.scss';

export const NotFound = () => {
    return (
        <div className={s.container}>
            <h1>Страница не найдена</h1>
            <Link to='/' className={s.link}>
                <span>Главная</span>
            </Link>
        </div>
    );
};