import React from 'react';
import s from './Header.module.scss';

import user from './user.svg';
import { tokenInstance } from './../../api/tokenInstance';

export const Header = () => {
    return (
        <header className={s.header}>
            <div className={s.history}>
                <button className={s.history__button + ' ' + s.buttonBack}></button>
                <button className={s.history__button + ' ' + s.buttonUp}></button>
            </div>
            <div className={s.user}>
                <button onClick={() => tokenInstance.getToken()} className={s.user__button}>
                    <img className={s.user__button__img} src={user} alt="Аватар пользователя" />
                    <span className={s.user__button__text}>Никита</span>
                </button>
                <button className={s.user__button}>
                    <img className={s.user__button__img} src={user} alt="Аватар пользователя"/>
                    <span className={s.user__button__text}>Никита</span>
                </button>
            </div>
        </header>
    );
};