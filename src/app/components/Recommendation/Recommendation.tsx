import React, { FC } from 'react';
import s from './Recommendation.module.scss';
import { Link } from 'react-router-dom';

import { ContainerNoWrap } from '../ContainerNoWrap/ContainerNoWrap';
import { Release } from '../Release/Release';
import { ISearchItem, EnumSearchType } from '../../types/typeSearch';

interface IProps {
    title: string,
    releases: Array<ISearchItem>,

    searchType?: EnumSearchType,
    searchText?: string,

    id?: string,
}

export const Recommendation: FC<IProps> = ({ title, releases, searchType, searchText, id }) => {
    const href = id
        ? `/CollectionItems/artist/${searchType}/${id}`
        : `/CollectionItems/${searchType}/${searchText}`;

    return (
        <article className={s.recommendation}>
            <div className={s.headline}>
                <Link className={s.headline__header} to={href}>
                    {title}
                </Link>
                <Link className={s.headline__all} to={href}>
                    все
                </Link>
            </div>

            <ContainerNoWrap>
                {releases.map(release => <Release key={release.id} item={release}/>)}
            </ContainerNoWrap>
        </article>
    );
};