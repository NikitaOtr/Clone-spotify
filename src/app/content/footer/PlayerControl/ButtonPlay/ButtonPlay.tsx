import React, { FC } from 'react';
import s from './ButtonPlay.module.scss';

interface IProps {
    toggle(): void
    isPlaying: boolean
}

export const ButtonPlay: FC<IProps> = ({ toggle, isPlaying }) => {
    return (
        <button onClick={() => toggle()} className={s.button}>
            <div className={isPlaying ? s.pause : s.play }></div>
        </button>
    );
};