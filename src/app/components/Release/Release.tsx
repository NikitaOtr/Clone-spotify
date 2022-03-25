import React, { FC } from 'react';
import s from './Release.module.scss';

interface IProps {
    name: string
    description: string
    photo: string
}

export const Release: FC<IProps> = ({ name, description, photo }) => {
    return (
        <article className={s.release + ' ' + s.hoverEffect}>
            <a className={s.release__link} href="./playlist.html">
                <div className={s.release__boxImg}>
                    <img className={s.release__boxImg__img} src={photo} alt="" />
                </div>
                <div className={s.release__boxText}>
                    <p className={s.release__boxText__name}>{name}</p>
                    <span className={s.release__boxText__description}>{description}</span>
                </div>
            </a>
        </article>
    );
};
