import React, { useEffect } from 'react';
import s from './MainPage.module.scss';
import { Mixes } from './Mixes/Mixes';
import { Mix } from './Mix/Mix';

import img from './../../aside/img/heart.svg';
import { Recommendation } from '../../../components/Recommendation/Recommendation';
import { Loader } from '../../../components/Loader/Loader';

import { apiPlayList } from '../../../api/apiPlayList';

export const MainPage = () => {

    // const fetchData = async () => {
    //     const data = await apiPlayList.getPlayList('6yl1J64As9To41977OXaBx');
    //     console.log(data);
    // };

    // useEffect(() => {
    //     fetchData();
    // }, []);

    const mixes = [1, 2, 3, 4, 5, 6];
    const releases = [
        { name: 'My Release', description: 'description', img },
        { name: 'My Release', description: 'description', img },
        { name: 'My Release', description: 'description', img },
        { name: 'My Release', description: 'description', img },
        { name: 'My Release', description: 'description', img },
        { name: 'My Release', description: 'description', img },
    ];
    return (
        <>
            <h1 className={s.headline}>Добрый день</h1>

            <Mixes>
                {mixes.map(mix => <Mix key={mix} number={mix} photo={img}/>)}
            </Mixes>

            <section className={s.recommendations}>
                <Loader/>
                {/* <Recommendation releases={releases}/>

                <Recommendation releases={releases}/>

                <Recommendation releases={releases}/> */}
            </section>
        </>
    );
};