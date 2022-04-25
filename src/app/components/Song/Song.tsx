import React, { FC } from 'react';
import s from './Song.module.scss';

import { Link } from 'react-router-dom';
import { ITrack } from './../../types/commonTypes';
import { timeFormatFromMilliseconds } from './../../utils/timeFormat';
import { useAppActions } from '../../hooks/useAppAction';

interface IProps {
    index: number
    track: ITrack
    tracks: Array<ITrack>
}

export const Song: FC<IProps> = ({ track, index, tracks }) => {
    const { setPlaylist } = useAppActions();
    return (
        <article onClick={() => setPlaylist({ playlist: tracks, startIndex: index })} className={s.song}>
            <div className={s.song__box}>
                <span className={s.song__box__text}>{index + 1}</span>
            </div>

            <div className={s.song__box}>
                {track.album?.images[0]?.url &&
                    <div>
                        <img className={s.song__box__img} src={track?.album?.images[0].url} alt=""/>
                    </div>
                }
                <div className={s.song__box__title}>
                    <span className={s.song__box__text}>{track.name}</span>
                    <div className={s.song__box__authors}>
                        {track.artists.map(artist => (
                            <Link onClick={e => e.stopPropagation()} to={`/artist/${artist.id}`}
                                key={artist.id} className={s.song__box__authors__author}>
                                {artist.name}
                            </Link>
                        ))}
                    </div>
                </div>
            </div>

            <div className={s.song__box}>
                <Link onClick={e => e.stopPropagation()} className={s.song__box__album}
                    to={`/playlist/album/${track?.album?.id}`}>
                    {track?.album?.name}
                </Link>
            </div>

            <div className={s.song__box}>
                <span className={s.song__box__text}>{timeFormatFromMilliseconds(track.duration_ms)}</span>
            </div>
        </article>
    );
};