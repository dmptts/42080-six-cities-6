import React, {useEffect, useRef} from 'react';
import PropTypes from 'prop-types';
import leaflet from 'leaflet';
import {connect} from 'react-redux';
import offersPropTypes from '../offers-list/offers-list.prop';

import '../../../node_modules/leaflet/dist/leaflet.css';
import offerPropTypes from '../offer/offer.prop';

const Map = (props) => {
  const {className, offers, currentCity, activeCard} = props;
  const city = [52.38333, 4.9];
  const mapRef = useRef();

  useEffect(() => {
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

    return () => {
      mapRef.current.remove();
    };
  }, [currentCity]);

  useEffect(() => {
    const inactiveIconUrl = `./img/pin.svg`;
    const activeIconUrl = `./img/pin-active.svg`;
    const iconSize = [30, 30];

    const pins = offers
    .filter((offer) => offer.city === currentCity)
    .map((offer) => {
      const iconUrl = (activeCard && offer.id === activeCard.id) ? activeIconUrl : inactiveIconUrl;

      const icon = leaflet.icon({
        iconUrl,
        iconSize
      });

      return leaflet.marker(
          [offer.location.latitude, offer.location.longitude],
          {icon}
      );
    });

    leaflet.layerGroup(pins).addTo(mapRef.current);
  }, [currentCity, offers, activeCard]);

  return <section id="map" className={`${className} map`} ref={mapRef}></section>;
};

Map.propTypes = {
  className: PropTypes.string,
  currentCity: PropTypes.string.isRequired,
  offers: offersPropTypes,
  activeCard: offerPropTypes
};

const mapStateToProps = (state) => ({
  currentCity: state.city,
  activeCard: state.activeCard,
  offers: state.offers
});

export default connect(mapStateToProps, null)(Map);
