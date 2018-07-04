import React from 'react';

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
    window.location.href = 'mailto:contact@mach4.app?subject=' + this.state.subject + '&body=From: ' + this.state.email + '%0A%0A' + encodeURIComponent(this.state.message);
  }

  render() {
    return (
      <div className='oe-footer'>
        <div className='footer-container'>
          <div className='footer-title'>CONTACT</div>

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
      </div>
    );
  }
}

export default Footer;
