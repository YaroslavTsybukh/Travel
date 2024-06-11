import { Icon, Image } from '../index';

import styles from './Gallery.module.scss';

export const Gallery = () => {
    return (
        <section className={styles.gallery}>
            <div className="container">
                <div className={styles.wrapper}>
                    <Image
                        classNamePicture={styles.skyPicture}
                        picture1x="sky_1x"
                        picture2x="sky_2x"
                    />
                    <Image
                        classNamePicture={styles.waterfallPicture}
                        picture1x="waterfall_1x"
                        picture2x="waterfall_2x"
                    />
                    <Image
                        classNamePicture={styles.riverPicture}
                        picture1x="river_1x"
                        picture2x="river_2x"
                    />
                    <Image
                        classNamePicture={styles.housesPicture}
                        picture1x="houses_1x"
                        picture2x="houses_2x"
                    />
                    <Image
                        classNamePicture={styles.bluePicture}
                        picture1x="blue_1x"
                        picture2x="blue_2x"
                    />
                    <div className={styles.button}>
                        <Icon
                            className={styles.allPhotoIcon}
                            name="all-photos"
                        />
                        <p className={styles.buttonText}>All photos</p>
                    </div>
                </div>
            </div>
        </section>
    );
};
