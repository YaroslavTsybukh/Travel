import { FC } from 'react';
import { Image, Icon } from '..';
import styles from './Card.module.scss';

interface ICard {
    picture1x: string;
    picture2x: string;
    badge: string;
    title: string;
    text: {
        time: string;
        place: string;
    };
}

export const Card: FC<ICard> = ({
    picture1x,
    picture2x,
    badge,
    title,
    text,
}) => {
    return (
        <div className={styles.card}>
            <div className={styles.cardImageBlock}>
                <Image
                    classNamePicture={styles.image}
                    picture1x={picture1x}
                    picture2x={picture2x}
                />
                <p className={styles.badge}>{badge}</p>
                <Icon className={styles.saveIcon} name="save" />
            </div>
            <div className={styles.cardFooter}>
                <h4 className={styles.title}>{title}</h4>
                <div className={styles.info}>
                    <p className={styles.text}>{text.time}</p>
                    <p className={styles.text}>{text.place}</p>
                </div>
            </div>
        </div>
    );
};
