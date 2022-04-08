import React from 'react';
import s from './MusicTitle.module.scss';
import { useAppSelector } from '../../../hooks/useAppSelector';

export const MusicTitle = () => {
    const track = useAppSelector(state => state.playerReducer.track);
    if (!track) {
        return (
            <div className={s.musicTitle}></div>
        );
    }
    return (
        <div className={s.musicTitle}>
            <img className={s.musicTitle__img} src={track.album?.images[0].url} alt="Аватар трека" />
            <div className={s.musicTitle__text}>
                <span className={s.musicTitle__text__name}>{track.name}</span>
                <span className={s.musicTitle__text__autor}>{track.artists[0].name}</span>
            </div>
        </div>
    );
};