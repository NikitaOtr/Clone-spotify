import React, { VFC } from 'react';
import s from './Playlist.module.scss';

import time from './time.svg';

import { Song } from '../Song/Song';
import { EnumOfPlaylistTypes, ICollectionOfTracks } from './../../types/commonTypes';

interface IProps {
    tracks: ICollectionOfTracks
}

export const Playlist: VFC<IProps> = ({ tracks }) => {

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
                    <span className={s.playList__header__box__text}>
                        {tracks.type === EnumOfPlaylistTypes.playlist ? 'Альбом' : ''}
                    </span>
                </div>

                <div className={s.playList__header__box + ' ' + s.box__item}>
                    <img className={s.playList__header__box__img} src={time} alt="" />
                </div>
            </div>
            <div>
                {tracks.items.map((track, i) => <Song key={i} tracks={tracks.items} index={i} track={track}/>)}
            </div>
        </section>
    );
};