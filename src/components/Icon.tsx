import { FC } from 'react';

interface IIcon {
    className: string;
    name: string;
}

export const Icon: FC<IIcon> = ({ className, name }) => {
    return (
        <svg className={className}>
            <use href={`/sprite.svg#icon-${name}`}></use>
        </svg>
    );
};
