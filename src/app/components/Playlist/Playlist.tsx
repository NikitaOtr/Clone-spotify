import React, { FC } from 'react';
import { Song } from '../Song/Song';
import s from './Playlist.module.scss';
import { ITrack } from './../../types/typeSearch';
import time from './time.svg';
interface IProps {
    tracks: Array<ITrack>
}

export const Playlist: FC<IProps> = ({ tracks }) => {
    return (
        <section className={s.playList}>
            <div className={s.playList__header + ' ' + s.box}>
                <div className={s.playList__header__box + ' ' + s.box__item}>
                    <span className={s.playList__header__box__text}>№</span>
                </div>

                <div className={s.playList__header__box + ' ' + s.box__item}>
                    <span className={s.playList__header__box__text}>Название</span>
                </div>

                <div className={s.playList__header__box + ' ' + s.box__item}>
                    <span className={s.playList__header__box__text}>{tracks[0].album ? 'Альбом' : ''}</span>
                </div>

                <div className={s.playList__header__box + ' ' + s.box__item}>
                    <img className={s.playList__header__box__img} src={time} alt="" />
                </div>
            </div>
            {tracks.map((track, i) => <Song key={i} tracks={tracks} index={i} track={track}/>)}
        </section>
    );
};