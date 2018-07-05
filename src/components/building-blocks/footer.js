import React   from 'react';
import Utility from '../../utility';


class Footer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      subject: '',
      email: '',
      message: ''
    }
  }

  handleUserInput(property, e) {
    this.setState({ [property]: e.target.value });
  }

  focusInput(targetElement) {
    let elem = $('.' + targetElement);
    elem.addClass('selected');
    elem.find('.input-elem').focus();
  }

  submitForm() {
    window.location.href = 'mailto:vinitp94@gmail.com?subject=' + this.state.subject + '&body=From: ' + this.state.email + '%0A%0A' + encodeURIComponent(this.state.message);
  }

  render() {
    return (
      <div className='oe-footer'>
        <div className='footer-container'>
          <div className='footer-title'>BOOKINGS</div>
          <div className='booking-description'>{ 'Thank you for considering Oasis Events for your next event! Please fill out the form below to give us a sense of what you\'re looking for and we\'ll get back to you within 24-48 hours. If you\'re in a rush, not to worry; feel free to call us at (408) 838 7249 instead!' }</div>

          <div className={'form-field subject'} onFocus={ this.focusInput.bind(this, 'subject') }>
            <input className='input-elem' onChange={ this.handleUserInput.bind(this, 'subject') }/>
            <div className='placeholder'>Subject</div>
          </div>

          <div className={'form-field email'} onFocus={ this.focusInput.bind(this, 'email') }>
            <input className='input-elem' onChange={ this.handleUserInput.bind(this, 'email') }/>
            <div className='placeholder'>Email Address</div>
          </div>

          <div className={'form-field message'} onFocus={ this.focusInput.bind(this, 'message') }>
            <textarea className='input-elem' onChange={ this.handleUserInput.bind(this, 'message') }/>
            <div className='placeholder'>Message</div>
          </div>

          <div className={'submit-btn dark'} onClick={ this.submitForm.bind(this) }>SUBMIT</div>
        </div>

        <div className='bottom-bar'>
          <div className='bottom-container'>
            <div className='developer-credits'>Developed by <a href='http://mach4.app/' target='_blank'>MACH4 Technologies Inc.</a></div>

            <div className='account-links'>
              <a href='' target='_blank'><img className='account-link-item' src={ Utility.buildAssetUrl('logos/instagram.svg') }/></a>
              <a href='' target='_blank'><img className='account-link-item' src={ Utility.buildAssetUrl('logos/facebook.svg') }/></a>
              <a href='' target='_blank'><img className='account-link-item' src={ Utility.buildAssetUrl('logos/yelp.svg') }/></a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Footer;
