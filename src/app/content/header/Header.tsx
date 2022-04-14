import React from 'react';
import s from './Header.module.scss';
import { useNavigate } from 'react-router-dom';

import user from './user.svg';
import { userToken } from '../../api/tokenInstance';

export const Header = () => {
    const navigation = useNavigate();
    return (
        <header className={s.header}>
            <div className={s.history}>
                <button onClick={() => navigation(-1)} className={s.history__button + ' ' + s.buttonBack}></button>
                <button onClick={() => navigation(1)} className={s.history__button + ' ' + s.buttonUp}></button>
            </div>
            <div className={s.user}>
                <a href={userToken.getLink()}>User</a>
                <button className={s.user__button}>
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