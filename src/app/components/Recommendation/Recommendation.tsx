import React, { FC } from 'react';
import s from './Recommendation.module.scss';

import { ContainerNoWrap } from '../ContainerNoWrap/ContainerNoWrap';
import { Release } from '../Release/Release';

interface IProps {
    releases: Array<{name: string, description: string, img: string}>
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

            <ContainerNoWrap>
                {releases.map((release, i) => <Release name={release.name} key={i}
                    description={release.description} photo={release.img} />)}
            </ContainerNoWrap>
        </article>
    );
};