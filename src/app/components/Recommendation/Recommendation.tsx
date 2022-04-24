import React, { FC } from 'react';
import s from './Recommendation.module.scss';
import { Link } from 'react-router-dom';

import { ContainerNoWrap } from '../ContainerNoWrap/ContainerNoWrap';
import { Release } from '../Release/Release';
import { ICollectionOfReleases } from '../../types/commonTypes';

interface IProps {
    title: string,
    releases: ICollectionOfReleases,
    id: string,
}

export const Recommendation: FC<IProps> = ({ title, releases, id }) => {
    const hrefToCollection = `collection/${releases.type}/${id}`;
    return (
        <article className={s.recommendation}>
            <div className={s.headline}>
                <Link className={s.headline__header} to={hrefToCollection}>{title}</Link>
                <Link className={s.headline__all} to={hrefToCollection}>все</Link>
            </div>

            <ContainerNoWrap>
                {releases.items.map(release => <Release key={release.id} item={release}/>)}
            </ContainerNoWrap>
        </article>
    );
};