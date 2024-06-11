import { Header, Gallery, TripDuration } from './components';

import './styles/main.scss';

export const App = () => {
    return (
        <>
            <Header />
            <main>
                <Gallery />
                <TripDuration />
            </main>
        </>
    );
};
