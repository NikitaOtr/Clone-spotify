import React from 'react';
import s from './MusicTitle.module.scss';
import { Link } from 'react-router-dom';

import question from './../../../img/question.svg';

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
            <img className={s.musicTitle__img} src={track.album?.images[0].url || question} alt="Аватар трека" />
            <div className={s.musicTitle__text}>
                <span className={s.musicTitle__text__name}>{track.name}</span>
                <div className={s.box__authors}>
                    {track.artists.map(artist => (
                        <Link to={`artist/${artist.id}`} key={artist.id} className={s.musicTitle__text__author}>
                            {`${artist.name}`}
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    );
};