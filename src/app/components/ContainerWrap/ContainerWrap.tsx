import React, { FC, ReactNode } from 'react';
import s from './ContainerWrap.module.scss';

interface IProps {
    children: ReactNode
}

export const ContainerWrap: FC<IProps> = ({ children }) => {
    return (
        <div className={s.containerWrap}>
            {children}
        </div>
    );
};