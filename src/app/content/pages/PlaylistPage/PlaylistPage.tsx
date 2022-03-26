import React from 'react';
import { Playlist } from '../../../components/Playlist/Playlist';

export const PlaylistPage = () => {
    return (
        <>
            <div className="play-list-title">
                <div className="play-list-title__box-img">
                    <img className="play-list-title__box-img__img" src="./images/aside/heart.svg" alt=""/>
                </div>
                <div className="play-list-title__box-text">
                    <h1 className="play-list-title__box-text__name">Любимые треки</h1>
                    <span className="play-list-title__box-text__count">Количество треков: 172</span>
                </div>
            </div>

            <div className="play-list-btn-play">
                <button className="play-list-btn-play__btn">
                    <img className="play-list-btn-play__btn__img" src="./images/greenBtn.svg" alt=""/>
                </button>
            </div>

            <Playlist/>
        </>
    );
};