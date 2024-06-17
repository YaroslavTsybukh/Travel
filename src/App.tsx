import {
    Header,
    Gallery,
    TripDuration,
    Highlights,
    Itinerary,
    Region,
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
                <Region />
            </main>
        </>
    );
};
