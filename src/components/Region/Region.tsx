import { Icon, Carousel } from '..';
import styles from './Region.module.scss';

export const Region = () => {
    const handleClick = () => {
        console.log(1);
    };

    return (
        <section className={styles.region}>
            <div className="container">
                <h3 className={styles.title}>Golden Circle Region</h3>
                <div className={styles.subtitle}>
                    <p className={styles.info}>Geysers</p>
                    <p className={styles.info}>Waterfalls</p>
                    <p className={styles.info}>Crater lakes</p>
                </div>
                <p className={styles.description}>
                    The Golden Circle in Iceland is a renowned tourist route
                    that encompasses an array of stunning natural landmarks
                    within a relatively short distance from Reykjavík. This
                    scenic loop includes three primary attractions: Þingvellir
                    National Park, where you can explore the rift valley created
                    by the diverging North American and Eurasian tectonic plates
                    and witness the site of Iceland's ancient parliament.
                </p>
                <div className={styles.highlights}>
                    <div className={styles.highlightsHead}>
                        <h4 className={styles.heading}>Region highlights</h4>
                        <div
                            className={styles.buttonPlan}
                            onClick={handleClick}
                        >
                            <Icon className={styles.planIcon} name="plan" />
                            <p className={styles.buttonPlanText}>
                                Show daily plan
                            </p>
                        </div>
                    </div>
                    <Carousel />
                </div>
            </div>
        </section>
    );
};
