import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';
import { Card } from './Card';

export const Carousel = () => {
    const settings = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 3,
        variableWidth: true,
        // slidesToScroll: 1,
    };

    return (
        <Slider {...settings}>
            <Card
                picture1x="sl_gullfoss_1x"
                picture2x="sl_gullfoss_2x"
                badge="Curator’s pick"
                title="Gullfoss Waterfall"
                text={{ time: '1h', place: 'Waterfall' }}
            />
            <Card
                picture2x="sl_valley_2x"
                picture1x="sl_valley_1x"
                badge="Curator’s pick"
                title="Reykjadalur Valley"
                text={{ time: '1h', place: 'Iconic hike, hot springs' }}
            />
            <Card
                picture1x="sl_geysir_1x"
                picture2x="sl_geysir_2x"
                badge="Curator’s pick"
                title="Geysir Thermal Field"
                text={{ time: '1h', place: 'Geysers' }}
            />
            <Card
                picture1x="sl_gullfoss_1x"
                picture2x="sl_gullfoss_2x"
                badge="Curator’s pick"
                title="Gullfoss Waterfall"
                text={{ time: '1h', place: 'Waterfall' }}
            />
        </Slider>
    );
};
