import React from 'react';

class Header extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className={'oe-header ' + (this.props.classToApply || '')}>
        <div className='header-container'>
          <div className='logo'>OASIS EVENTS</div>
          <div className={'contact-btn'} onClick={ Utility.scrollToFooter }>CONTACT</div>
        </div>
      </div>
    );
  }
}

export default Header;
