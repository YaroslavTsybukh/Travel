import { Icon, Image } from '../index';

import styles from './Highlights.module.scss';

export const Highlights = () => {
    return (
        <section className={styles.highlights}>
            <div className="container">
                <div className={styles.head}>
                    <h1 className={styles.heading}>Iceland’s Highlights</h1>
                    <div className={styles.buttons}>
                        <div className={styles.wishlistBlock}>
                            <Icon
                                className={styles.bookmarkIcon}
                                name="bookmark"
                            />
                            <p className={styles.wishlistText}>
                                Add to wishlist
                            </p>
                        </div>
                        <div className={styles.shareBlock}>
                            <Icon className={styles.shareIcon} name="share" />
                            <p className={styles.shareText}>Share</p>
                        </div>
                    </div>
                </div>
                <div className={styles.content}>
                    <div className={styles.user}>
                        <Image
                            classNamePicture={styles.ava}
                            picture1x="ava_1x"
                            picture2x="ava_2x"
                        />
                        <div className={styles.userInfo}>
                            <h5 className={styles.title}>Curated by Sandra</h5>
                            <p className={styles.specialization}>Fyno expert</p>
                        </div>
                    </div>
                    <p className={styles.description}>
                        Welcome to Iceland, a land of breathtaking landscapes
                        and unspoiled natural beauty. From its majestic
                        waterfalls and geothermal wonders to the vibrant culture
                        and rich history, Iceland promises an unforgettable
                        adventure for every traveler.
                    </p>
                </div>
            </div>
        </section>
    );
};
