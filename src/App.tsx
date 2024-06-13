import {
    Header,
    Gallery,
    TripDuration,
    Highlights,
    Itinerary,
} from './components';

import './styles/main.scss';

export const App = () => {
    return (
        <>
            <Header />
            <main>
                <Gallery />
                <TripDuration />
                <Highlights />
                <Itinerary />
            </main>
        </>
    );
};
