import React from 'react';
import Utility from '../../utility';

export default function UnderConstruction() {
  return (
    <div className='oe-under-construction'>
      <img className='logo' src={Utility.buildAssetUrl('logos/oe.png')}/>
      <div className='message'>The website is currently going through scheduled maintenance! For bookings, contact <a className='link-text' href='mailto:vinitp94@gmail.com?subject='>contact@oasisevents.us</a></div>
    </div>
  );
}
