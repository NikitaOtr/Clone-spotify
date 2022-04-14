import React, { FC } from 'react';
import s from './Song.module.scss';

// import img from './../../content/aside/img/heart.svg';
import { ITrack } from './../../types/typeSearch';
import { timeFormatFromMilliseconds } from './../../utils/timeFormat';
import { useAppActions } from '../../hooks/useAppAction';

interface IProps {
    index: number
    track: ITrack
    tracks: Array<ITrack>
}

export const Song :FC<IProps> = ({ track, index, tracks }) => {
    const { setPlaylist } = useAppActions();
    return (
        <article onClick={() => setPlaylist({ playlist: tracks, startIndex: index })} className={s.song}>
            <div className={s.song__box}>
                <span className={s.song__box__text}>{index + 1}</span>
            </div>

            <div className={s.song__box}>
                {track.album?.images[0].url &&
                    <div>
                        <img className={s.song__box__img} src={track?.album?.images[0].url || ''} alt=""/>
                    </div>
                }
                <div className={s.song__box__title}>
                    <span className={s.song__box__text}>{track.name}</span>
                    <div className={s.song__box__autors}>
                        {track?.artists?.map(artist => (
                            <a key={artist.id} className={s.song__box__autors__autor}>{artist.name}</a>
                        ))}
                    </div>
                </div>
            </div>

            <div className={s.song__box}>
                <span className={s.song__box__text}>{track?.album?.name}</span>
            </div>

            <div className={s.song__box}>
                <span className={s.song__box__text}>{timeFormatFromMilliseconds(track?.duration_ms || 0)}</span>
            </div>
        </article>
    );
};