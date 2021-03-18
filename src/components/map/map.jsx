import React, {useEffect, useRef} from 'react';
import PropTypes from 'prop-types';
import leaflet from 'leaflet';
import {connect} from 'react-redux';
import offersPropTypes from '../offers-list/offers-list.prop';

import '../../../node_modules/leaflet/dist/leaflet.css';

const Map = (props) => {
  const {className, offers, currentCity} = props;
  const offerCoords = offers
    .filter((offer) => offer.city === currentCity)
    .map((offer) => [offer.location.latitude, offer.location.longitude]);
  const city = [52.38333, 4.9];
  const mapRef = useRef();

  useEffect(() => {
    const icon = leaflet.icon({
      iconUrl: `./img/pin.svg`,
      iconSize: [30, 30]
    });

    const zoom = 12;

    mapRef.current = leaflet.map(`map`, {
      center: city,
      zoom,
      zoomControl: false,
      marker: true
    });

    mapRef.current.setView(city, zoom);

    leaflet
    .tileLayer(`https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png`, {
      attribution: `&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>`
    })
    .addTo(mapRef.current);

    offerCoords.forEach((coords) => {
      leaflet
      .marker(coords, {icon})
      .addTo(mapRef.current);
    });

    return () => {
      mapRef.current.remove();
    };
  });

  return <section id="map" className={`${className} map`} ref={mapRef}></section>;
};

Map.propTypes = {
  className: PropTypes.string,
  currentCity: PropTypes.string.isRequired,
  offers: offersPropTypes
};

const mapStateToProps = (state) => ({
  currentCity: state.city,
  offers: state.offers
});

export default connect(mapStateToProps, null)(Map);
