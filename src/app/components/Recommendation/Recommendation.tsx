import React, { FC } from 'react';
import s from './Recommendation.module.scss';

import { ContainerWrap } from '../ContainerWrap/ContainerWrap';
import { Release } from '../Release/Release';
import { IArtist } from './../../store/Reducers/searchReducer';


interface IProps {
    releases: Array<IArtist>
}

export const Recommendation: FC<IProps> = ({ releases }) => {
    return (
        <article className={s.recommendation}>
            <div className={s.recommendation__headline}>
                <h2 className={s.recommendation__headline__header + ' ' + s.hoverEffect}>
                    <a href="./collectionsItems.html">Выпуски для тебя</a>
                </h2>
                <a href="./collectionsItems.html"
                    className={s.recommendation__headline__all + ' ' + s.hoverEffect}>все</a>
            </div>

            <ContainerWrap>
                {releases.map((release, i) => <Release key={i} item={release}/>)}
            </ContainerWrap>
        </article>
    );
};