import React, { FC } from 'react';
import s from './ButtonPlay.module.scss';
import { useAppSelector } from './../../../../hooks/useAppSelector';

interface IProps {
    toggle(): void
    isPlaying: boolean
}

export const ButtonPlay: FC<IProps> = ({ toggle, isPlaying }) => {
    return (
        <button onClick={() => toggle()} className={s.fakePlayer}>
            <div className={isPlaying ? s.pause : s.play }></div>
        </button>
    );
};