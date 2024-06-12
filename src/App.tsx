import { Header, Gallery, TripDuration, Highlights } from './components';

import './styles/main.scss';

export const App = () => {
    return (
        <>
            <Header />
            <main>
                <Gallery />
                <TripDuration />
                <Highlights />
            </main>
        </>
    );
};
