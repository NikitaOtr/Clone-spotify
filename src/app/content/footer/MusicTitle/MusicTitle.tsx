import React from 'react';
import s from './MusicTitle.module.scss';
import play from './../img/sound/big.svg';

export const MusicTitle = () => {
    return (
        <div className={s.musicTitle}>
            <img className={s.musicTitle__img} src={play} alt="Аватар трека" />
            <div className={s.musicTitle__text}>
                <span className={s.musicTitle__text__name}>Крепко влип</span>
                <span className={s.musicTitle__text__autor}>LUCAS</span>
            </div>
        </div>
    );
};