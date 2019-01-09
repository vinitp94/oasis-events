import React   from 'react';
import Utility from '../../utility';

class Header extends React.Component {
  scrollToSection(section) {
    let scrollAmt;
    switch (section) {
      case 'about':
        scrollAmt = 0;
        break;
      case 'services':
        scrollAmt = $('.section.services').offset().top - 120;
        break;
      case 'testimonials':
        scrollAmt = $('.section.testimonials').offset().top - 120;
        break;
      case 'bookings':
        scrollAmt = $('.oe-footer').offset().top - 50;
        break;
    }
    window.scroll({
      top: scrollAmt,
      left: 0,
      behavior: 'smooth'
    });
  }

  render() {
    return (
      <div className={'oe-header ' + (this.props.classToApply || '')}>
        <div className='header-container'>
          <img className='logo' src={Utility.buildAssetUrl('logos/oe.png')}/>

          <div className='nav-container'>
            <div className='nav-item' onClick={this.scrollToSection.bind(this, 'about')}>about us</div>
            <div className='nav-item' onClick={this.scrollToSection.bind(this, 'services')}>services</div>
            <div className='nav-item' onClick={this.scrollToSection.bind(this, 'testimonials')}>testimonials</div>
            <div className='nav-item' onClick={this.scrollToSection.bind(this, 'bookings')}>bookings</div>
          </div>
        </div>
      </div>
    );
  }
}

export default Header;
