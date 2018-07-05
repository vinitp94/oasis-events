import React from 'react';

class Header extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    setTimeout(() => {
      $('.oe-header > .header-container > .logo').addClass('spread');
    }, 100);
  }

  scrollToSection(section) {
    let scrollAmt;

    switch (section) {
      case 'about':
        scrollAmt = 0;
        break;
      case 'services':
        scrollAmt = $('.section.services').offset().top - 200;
        break;
      case 'testimonials':
        scrollAmt = $('.section.testimonials').offset().top - 200;
        break;
      case 'bookings':
        scrollAmt = $('#root').height();
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
          <div className='logo'>OASIS EVENTS</div>

          <div className='nav-container'>
            <div className='nav-item' onClick={ this.scrollToSection.bind(this, 'about') }>ABOUT</div>
            <div className='nav-item' onClick={ this.scrollToSection.bind(this, 'services') }>SERVICES</div>
            <div className='nav-item' onClick={ this.scrollToSection.bind(this, 'testimonials') }>TESTIMONIALS</div>
            <div className='nav-item' onClick={ this.scrollToSection.bind(this, 'bookings') }>BOOKINGS</div>
          </div>
        </div>
      </div>
    );
  }
}

export default Header;
