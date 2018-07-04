import React   from 'react';
import Utility from '../../utility';

class Header extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    setTimeout(() => {
      $('.oe-header > .header-container > .logo').addClass('spread');
    }, 100);
  }

  render() {
    return (
      <div className={'oe-header ' + (this.props.classToApply || '')}>
        <div className='header-container'>
          <div className='logo'>OASIS EVENTS</div>
          <div className={'contact-btn'} onClick={ Utility.scrollToFooter }>BOOKINGS</div>
        </div>
      </div>
    );
  }
}

export default Header;
