import React, { FC, ReactNode } from 'react';
import s from './ContainerNoWrap.module.scss';

interface IProps {
    children: ReactNode
}

export const ContainerNoWrap: FC<IProps> = ({ children }) => {
    return (
        <div className={s.containerNoWrap}>
            {children}
        </div>
    );
};