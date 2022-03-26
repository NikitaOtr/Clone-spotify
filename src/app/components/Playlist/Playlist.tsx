import React from 'react';
import { Song } from '../Song/Song';
import s from './Playlist.module.scss';


export const Playlist = () => {
    return (
        <section className={s.playList}>
            <div className={s.playList__header + ' ' + s.box}>
                <div className={s.playList__header__box + ' ' + s.box__item}>
                    <span className={s.playList__header__box__text}>№</span>
                </div>

                <div className={s.playList__header__box + ' ' + s.box__item}>
                    <span className={s.playList__header__box__text}>Название</span>
                </div>

                <div className={s.playList__header__box + ' ' + s.box__item}>
                    <span className={s.playList__header__box__text}>Альбом</span>
                </div>

                <div className={s.playList__header__box + ' ' + s.box__item}>
                    <img className={s.playList__header__box__img} src="./images/playlist/time.svg" alt="" />
                </div>
            </div>
            <Song/>
            <Song/>
            <Song/>
            <Song/>
            <Song/>
            <Song/>
            <Song/>
        </section>
    );
};