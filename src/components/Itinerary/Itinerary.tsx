import { FC, useState } from 'react';
import DatePicker from 'react-datepicker';
import { Icon } from '../index';
import styles from './Itinerary.module.scss';

export const Itinerary: FC = () => {
    const [startDate, setStartDate] = useState<Date>(new Date());
    const [endDate, setEndDate] = useState<null | Date>(null);

    const handleChange = (dates: [Date | null, Date | null]) => {
        const [start, end] = dates;
        setStartDate(start!);
        setEndDate(end);
    };

    return (
        <section className={styles.itinerary}>
            <div className="container">
                <h2 className={styles.heading}>Iceland itinerary</h2>
                <div className={styles.wrapper}>
                    <div className={styles.leftSide}>
                        <input
                            className={styles.placeInput}
                            type="text"
                            placeholder="Reykjavík, KEF"
                        />
                        <Icon className={styles.planeIcon} name="plane" />
                        <input
                            className={styles.placeInput}
                            type="text"
                            placeholder="San Francisco, SFO"
                        />
                    </div>
                    <div className={styles.rightSide}>
                        <DatePicker
                            showIcon
                            icon={<Icon name="calendar" />}
                            onChange={handleChange}
                            selected={startDate}
                            dateFormat="MMM d"
                            startDate={startDate}
                            endDate={endDate}
                            selectsRange
                        />
                        <div className={styles.person}>
                            <Icon className={styles.personIcon} name="person" />
                            <input
                                className={styles.personInput}
                                type="number"
                                placeholder="0"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
