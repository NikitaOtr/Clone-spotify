import React, { FC } from 'react';
import s from './Release.module.scss';

import img from './../../content/aside/img/heart.svg';
import { IArtist } from './../../store/Reducers/searchReducer';

interface IProps {
    item : IArtist;
}

export const Release: FC<IProps> = ({ item }) => {
    return (
        <article className={s.release + ' ' + s.hoverEffect}>
            <a className={s.release__link} href="./playlist.html">
                <div className={s.release__boxImg}>
                    <img className={s.release__boxImg__img} src={item.images[0]?.url || img } alt="" />
                </div>
                <div className={s.release__boxText}>
                    <p className={s.release__boxText__name}>{item.name}</p>
                    <span className={s.release__boxText__description}>{item.name}</span>
                </div>
            </a>
        </article>
    );
};
