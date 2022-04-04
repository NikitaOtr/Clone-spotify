import React, { FC } from 'react';
import s from './Recommendation.module.scss';
import { Link } from 'react-router-dom';

import { ContainerWrap } from '../ContainerWrap/ContainerWrap';
import { Release } from '../Release/Release';
import { ISearchItem } from '../../types/typeSearch';



interface IProps {
    q: string,
    releases: Array<ISearchItem>,
    name: string,
    href: string,
}

export const Recommendation: FC<IProps> = ({ releases, name, href, q }) => {
    return (
        <article className={s.recommendation}>
            <div className={s.recommendation__headline}>
                <h2 className={s.recommendation__headline__header + ' ' + s.hoverEffect}>
                    <Link to={`/CollectionItems/album/${q}`}>{name}</Link>
                </h2>
                <Link to={`/CollectionItems/${href}`} className={s.recommendation__headline__all + ' ' + s.hoverEffect}>
                    все
                </Link>
            </div>

            <ContainerWrap>
                {releases.map((release, i) => <Release key={i} item={release}/>)}
            </ContainerWrap>
        </article>
    );
};