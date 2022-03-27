import React, { FC } from 'react';
import s from './ButtonPlay.module.scss';

interface IProps {
    playing: boolean
    toggle(): void
}

export const ButtonPlay: FC<IProps> = ({ toggle, playing }) => {
    return (
        <button className={s.fakePlayer}>
            <div onClick={toggle} className={playing ? s.play : s.pause}></div>
        </button>
    );
};