import styles from './TripDuration.module.scss';

export const TripDuration = () => {
    return (
        <section className={styles.trip}>
            <div className="container">
                <div className={styles.wrapper}>
                    <div className={styles.tripInfo}>
                        <div className={styles.duration}>
                            <p className={styles.title}>Trip duration</p>
                            <p className={styles.text}>7 days</p>
                        </div>
                        <div className={styles.exploration}>
                            <p className={styles.title}>Exploration</p>
                            <p className={styles.text}>4 regions</p>
                        </div>
                        <div className={styles.flight}>
                            <p className={styles.title}>Flight</p>
                            <p className={styles.text}>7h 20m from SFO</p>
                        </div>
                    </div>
                    <div className={styles.button}>
                        <p className={styles.buttonText}>View itinerary</p>
                    </div>
                </div>
            </div>
        </section>
    );
};
