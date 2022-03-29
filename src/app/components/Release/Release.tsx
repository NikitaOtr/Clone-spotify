import React, { FC } from 'react';
import s from './Release.module.scss';

import img from './../../content/aside/img/heart.svg';

interface IProps {
    name: string
    description: string
    images: Array<any>
}

export const Release: FC<IProps> = ({ name, description, images }) => {
    return (
        <article className={s.release + ' ' + s.hoverEffect}>
            <a className={s.release__link} href="./playlist.html">
                <div className={s.release__boxImg}>
                    <img className={s.release__boxImg__img} src={images[0]?.url || img } alt="" />
                </div>
                <div className={s.release__boxText}>
                    <p className={s.release__boxText__name}>{name}</p>
                    <span className={s.release__boxText__description}>{description}</span>
                </div>
            </a>
        </article>
    );
};
