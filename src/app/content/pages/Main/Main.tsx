import React from 'react';
import s from './Main.module.scss';
import { Mixes } from './Mixes/Mixes';
import { Mix } from './Mix/Mix';

import img from './../../aside/img/heart.svg';
import { ContainerNoWrap } from '../../../components/ContainerNoWrap/ContainerNoWrap';
import { Release } from '../../../components/Release/Release';

export const Main = () => {
    const mixes = [1, 2, 3, 4, 5, 6];
    const releases = [
        { name: 'My Release', description: 'description' },
        { name: 'My Release', description: 'description' },
        { name: 'My Release', description: 'description' },
        { name: 'My Release', description: 'description' },
        { name: 'My Release', description: 'description' },
        { name: 'My Release', description: 'description' },
    ];

    return (
        <>
            <h1 className={s.headline}>Добрый день</h1>

            <Mixes>
                {mixes.map(mix => <Mix key={mix} number={mix} photo={img}/>)}
            </Mixes>

            <section className={s.recommendations}>
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
                            description={release.description} photo={img}/>)}
                    </ContainerNoWrap>
                </article>

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
                            description={release.description} photo={img} />)}
                    </ContainerNoWrap>
                </article>

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
                            description={release.description} photo={img} />)}
                    </ContainerNoWrap>
                </article>
            </section>
        </>
    );
};