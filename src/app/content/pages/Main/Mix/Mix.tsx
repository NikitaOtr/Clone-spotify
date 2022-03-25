import React, { FC } from 'react';
import s from './Mix.module.scss';

interface IProps {
    number: number
    photo: string
}

export const Mix: FC<IProps> = ({ number, photo }) => {
    return (
        <article>
            <a className={s.mix__link} href="./playlist.html">
                <img className={s.mix__img} src={photo} alt="Микс аватар" />
                <div className={s.mix__boxText}>
                    <span className={s.mix__boxText__text}>Микс №{number}</span>
                </div>
            </a>
        </article>
    );
};