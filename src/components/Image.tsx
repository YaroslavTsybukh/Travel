import { FC } from 'react';

interface IProps {
    classNamePicture: string;
    picture1x: string;
    picture2x: string;
}

export const Image: FC<IProps> = ({
    classNamePicture,
    picture1x,
    picture2x,
}) => {
    return (
        <picture className={classNamePicture}>
            <source
                srcSet={`/${picture1x}.avif 1x, /${picture2x}.avif 2x`}
                type="image/avif"
            />
            <source
                srcSet={`/${picture1x}.webp 1x, /${picture2x}.webp 2x`}
                type="image/webp"
            />
            <img
                src={`/${picture1x}.jpeg`}
                srcSet={`/${picture2x}.jpeg 2x`}
                alt="image"
            />
        </picture>
    );
};
