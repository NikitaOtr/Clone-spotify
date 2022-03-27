import React, { FC } from 'react';
import s from './ButtonMove.module.scss';

interface IProps {
    click(): void
    img: string
}

export const ButtonMove: FC<IProps> = ({ click, img }) => {
    return (
        <button onClick={click} className={s.button}>
            <img className={s.button__img} src={img} alt="Следующая" />
        </button>
    );
};