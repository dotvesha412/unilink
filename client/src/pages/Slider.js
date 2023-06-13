import React from 'react';
import {
  MDBCarousel,
  MDBCarouselItem,
} from 'mdb-react-ui-kit';

export default function Slider() {
  return (
    <MDBCarousel>
      <MDBCarouselItem
        className='w-100 d-block'
        itemId={1}
        src='/images/slide1.png'
        alt='...'
      />
      <MDBCarouselItem
        className='w-100 d-block'
        itemId={2}
        src='/images/slide2.png'
        alt='...'
      />
      <MDBCarouselItem
        className='w-100 d-block'
        itemId={3}
        src='/images/slide3.png'
        alt='...'
      />
    </MDBCarousel>
  );
}