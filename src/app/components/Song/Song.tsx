import React from 'react';
import s from './Song.module.scss';

import img from './../../content/aside/img/heart.svg';

export const Song = () => {
    return (
        <article className={s.song}>
            <div className={s.song__box}>
                <span className={s.song__box__text}>1</span>
            </div>

            <div className={s.song__box}>
                <div>
                    <img className={s.song__box__img} src={img} alt=""/>
                </div>
                <div className={s.song__box__title}>
                    <span className={s.song__box__text}>Пусть в кайф afasdfafasfasfdads</span>
                    <div className={s.song__box__autors}>
                        <a className={s.song__box__autors__autor}>Юность</a>
                        <a className={s.song__box__autors__autor}>Юность</a>
                    </div>
                </div>
            </div>

            <div className={s.song__box}>
                <span className={s.song__box__text}>Пусть в кайф asdfadfaffadfasdfasf</span>
            </div>

            <div className={s.song__box}>
                <span className={s.song__box__text}>113:04</span>
            </div>
        </article>
    );
};