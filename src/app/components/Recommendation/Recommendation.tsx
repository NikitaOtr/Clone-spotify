import React, { FC } from 'react';
import s from './Recommendation.module.scss';
import { Link } from 'react-router-dom';

import { ContainerNoWrap } from '../ContainerNoWrap/ContainerNoWrap';
import { Release } from '../Release/Release';
import { ISearchCollectionItems } from '../../types/typeSearch';



interface IProps {
    releases: ISearchCollectionItems,
    searchText: string,
}

export const Recommendation: FC<IProps> = ({ releases, searchText }) => {
    return (
        <article className={s.recommendation}>
            <div className={s.recommendation__headline}>
                <h2 className={s.recommendation__headline__header + ' ' + s.hoverEffect}>
                    <Link to={`/CollectionItems/${releases.type}/${searchText}`}>{releases.name}</Link>
                </h2>
                <Link to={`/CollectionItems/${releases.type}/${searchText}`}
                    className={s.recommendation__headline__all + ' ' + s.hoverEffect}>
                    все
                </Link>
            </div>

            <ContainerNoWrap>
                {releases.items.map((release, i) => <Release key={i} item={release}/>)}
            </ContainerNoWrap>
        </article>
    );
};