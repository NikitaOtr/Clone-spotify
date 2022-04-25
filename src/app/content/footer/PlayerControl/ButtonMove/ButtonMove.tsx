import React, { FC } from 'react';
import s from './ButtonMove.module.scss';

interface IProps {
    onClick(): void
    img: string
}

export const ButtonMove: FC<IProps> = ({ onClick, img }) => {
    return (
        <button onClick={onClick} className={s.button}>
            <img className={s.button__img} src={img}/>
        </button>
    );
};