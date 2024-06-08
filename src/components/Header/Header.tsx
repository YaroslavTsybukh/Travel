import { FC } from 'react';
import { Icon } from '../Icon';

export const Header: FC = () => {
    return (
        <header>
            <div className="container">
                <div className="info">
                    <div className="info__trip">Trips</div>
                    <div className="info__country">Iceland</div>
                    <div className="info__days">7 days</div>
                </div>
                <div className="create-button">
                    <Icon className="create-button__icon" name="plus" />
                    <p className="creacte-button__text">Create</p>
                </div>
            </div>
        </header>
    );
};
