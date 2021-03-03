import React, {useEffect, useRef} from 'react';
import leaflet from 'leaflet';
import {offersPropTypes} from '../../utils';

import '../../../node_modules/leaflet/dist/leaflet.css';

const Map = ({offers}) => {
  const offerCoords = offers.map((offer) => [offer.location.latitude, offer.location.longitude]);
  const city = [52.38333, 4.9];
  const mapRef = useRef();

  useEffect(() => {
    const icon = leaflet.icon({
      iconUrl: `./img/pin.svg`,
      iconSize: [30, 30]
    });

    const zoom = 12;

    const map = leaflet.map(`map`, {
      center: city,
      zoom,
      zoomControl: false,
      marker: true
    });
    map.setView(city, zoom);

    leaflet
    .tileLayer(`https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png`, {
      attribution: `&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>`
    })
    .addTo(map);

    offerCoords.forEach((coords) => {
      leaflet
      .marker(coords, {icon})
      .addTo(map);
    });

    return () => {
      mapRef.current.remove();
    };
  });

  return <section id="map" className="cities__map map" ref={mapRef}></section>;
};

Map.propTypes = {offers: offersPropTypes};

export default Map;