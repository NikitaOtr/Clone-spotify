import React from 'react';
import s from './Header.module.scss';

import user from './user.svg';

export const Header = () => {
    return (
        <header className={s.header}>
            <div className={s.history}>
                <button className={s.history__button + ' ' + s.buttonBack}></button>
                <button className={s.history__button + ' ' + s.buttonUp}></button>
            </div>
            <div className={s.user}>
                <button className={s.user__button}>
                    <img className={s.user__button__img} src={user} alt="Аватар пользователя"/>
                    <span className={s.user__button__text}>Никита</span>
                </button>
            </div>
        </header>
    );
};