import { FC } from 'react';
import { Icon, Select } from '../index';
import styles from './Header.module.scss';

export const Header: FC = () => {
    return (
        <header className={styles.header}>
            <div className="container">
                <div className={styles.wrapper}>
                    <div className={styles.infoBlock}>
                        <div className={styles.trips}>Trips</div>
                        <div className={styles.country}>Iceland</div>
                        <Select />
                    </div>
                    <div className={styles.createButton}>
                        <Icon name="plus" />
                        <p className={styles.textButton}>Create</p>
                    </div>
                </div>
            </div>
        </header>
    );
};
