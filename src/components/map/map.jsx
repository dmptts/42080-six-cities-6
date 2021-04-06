import React, {useEffect, useRef} from 'react';
import leaflet from 'leaflet';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import offersPropTypes from '../offers-list/offers-list.prop';
import offerPropTypes from '../offer/offer.prop';
import {CitiesCoords} from '../../const';
import {getActiveCard, getSelectedCity} from '../../store/app-interface/selectors';

import '../../../node_modules/leaflet/dist/leaflet.css';

const Map = (props) => {
  const {className, offers, currentCity, activeCard, currentOffer} = props;
  const zoom = 12;
  const mapRef = useRef();

  useEffect(() => {
    mapRef.current = leaflet.map(`map`, {
      center: CitiesCoords[currentCity],
      zoom,
      zoomControl: false,
      marker: true
    });

    mapRef.current.setView(CitiesCoords[currentCity], zoom);

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

    if (currentOffer) {
      offers.push(currentOffer);
    }

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
  currentCity: PropTypes.string,
  offers: offersPropTypes,
  activeCard: offerPropTypes,
  currentOffer: offerPropTypes
};

const mapStateToProps = (state) => ({
  currentCity: getSelectedCity(state),
  activeCard: getActiveCard(state)
});

export default connect(mapStateToProps, null)(Map);
