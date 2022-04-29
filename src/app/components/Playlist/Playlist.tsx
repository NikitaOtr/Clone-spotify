import React, { VFC } from 'react';
import s from './Playlist.module.scss';

import { EnumOfPlaylistTypes, ICollectionOfTracks } from './../../types/commonTypes';

import { Track } from '../Track/Track';

import time from './img/time.svg';

interface IProps {
    tracks: ICollectionOfTracks
}

export const Playlist: VFC<IProps> = ({ tracks }) => {
    return (
        <section className={s.playlist}>
            <div className={s.playlist__header}>
                <div className={s.playlist__header__box}>
                    <span className={s.playlist__header__box__text}>№</span>
                </div>

                <div className={s.playlist__header__box}>
                    <span className={s.playList__header__box__text}>Название</span>
                </div>

                <div className={s.playlist__header__box}>
                    <span className={s.playlist__header__box__text}>
                        {tracks.type === EnumOfPlaylistTypes.playlist ? 'Альбом' : ''}
                    </span>
                </div>

                <div className={s.playlist__header__box}>
                    <img className={s.playlist__header__box__img} src={time}/>
                </div>
            </div>

            <div>
                {tracks.items.map((track, i) => <Track key={i} tracks={tracks.items} index={i} track={track}/>)}
            </div>
        </section>
    );
};