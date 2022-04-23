import React from 'react';
import s from './Header.module.scss';

import { useNavigate } from 'react-router-dom';

export const Header = () => {
    const navigation = useNavigate();
    return (
        <header className={s.header}>
            <div className={s.history}>
                <button className={`${s.history__button} ${s.buttonBack}`}
                    onClick={() => navigation(-1)}></button>

                <button className={`${s.history__button} ${s.buttonUp}`}
                    onClick={() => navigation(1)}></button>
            </div>
        </header>
    );
};