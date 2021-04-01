import React from 'react';
import offerPropTypes from '../offer/offer.prop';

const Gallery = ({offer}) => {
  const {images} = offer;

  return <div className="property__gallery-container container">
    <div className="property__gallery">
      {images.slice(0, 6).map((image, index) => {
        return <div
          key={index}
          className="property__image-wrapper"
        >
          <img className="property__image" src={image} alt="Photo studio" />
        </div>;
      })}
    </div>
  </div>;
};

Gallery.propTypes = {offer: offerPropTypes};

export default Gallery;
