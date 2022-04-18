import React from 'react';
import s from './Header.module.scss';
import { useNavigate } from 'react-router-dom';

export const Header = () => {
    const navigation = useNavigate();
    return (
        <header className={s.header}>
            <div className={s.history}>
                <button onClick={() => navigation(-1)} className={`${s.history__button} ${s.buttonBack}`}></button>
                <button onClick={() => navigation(1)} className={`${s.history__button} ${s.buttonUp}`}></button>
            </div>
        </header>
    );
};