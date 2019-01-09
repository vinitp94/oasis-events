import React   from 'react';
import Utility from '../../utility';

class Footer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      subject: '',
      email: '',
      phone: '',
      budget: '',
      date: '',
      message: '',
      dj: false,
      lighting: false,
      baraat: false,
      rentals: false
    }
  }

  handleUserInput(property, e) {
    this.setState({[property]: e.target.value});
  }

  focusInput(targetElement) {
    let elem = $('.' + targetElement);
    elem.addClass('selected');
    elem.find('.input-elem').focus();
  }

  toggleCheckbox(property, e) {
    this.setState(prevState => ({[property]: !prevState[property]}))
  }

  submitForm(e) {
    e.preventDefault();
    window.location.href = 'mailto:vinitp94@gmail.com?subject=' + this.state.subject
      + '&body=Email: ' + this.state.email + '%0A%0A'
      + 'Phone: ' + this.state.phone + '%0A%0A'
      + 'Event Date: ' + this.state.date + '%0A%0A'
      + 'Estimated Budget: ' + this.state.budget + '%0A%0A'
      + encodeURIComponent(this.state.message);
  }

  render() {
    return (
      <div className='oe-footer'>
        <form className='footer-container' onSubmit={this.submitForm.bind(this)}>
          <div className='footer-title'>bookings</div>
          <div className='booking-description'>{'Thank you for considering Oasis Events for your next event! Please fill out the form below to give us a sense of what you\'re looking for and we\'ll get back to you within 24-48 hours. If you\'re in a rush, not to worry; feel free to call us at (408) 838 7249 instead!'}</div>

          <div className='form-field subject' onClick={this.focusInput.bind(this, 'subject')} onFocus={this.focusInput.bind(this, 'subject')}>
            <input className='input-elem' onChange={this.handleUserInput.bind(this, 'subject')}/>
            <div className='placeholder'>subject</div>
          </div>

          <div className='form-field email' onClick={this.focusInput.bind(this, 'email')} onFocus={this.focusInput.bind(this, 'email')}>
            <input className='input-elem' onChange={this.handleUserInput.bind(this, 'email')} autoComplete='email'/>
            <div className='placeholder'>email address</div>
          </div>

          <div className='flex-three'>
            <div className='form-field phone' onClick={this.focusInput.bind(this, 'phone')} onFocus={this.focusInput.bind(this, 'phone')}>
              <input className='input-elem' onChange={this.handleUserInput.bind(this, 'phone')} autoComplete='tel'/>
              <div className='placeholder'>phone number</div>
            </div>

            <div className='form-field budget' onClick={this.focusInput.bind(this, 'budget')} onFocus={this.focusInput.bind(this, 'budget')}>
              <input className='input-elem' onChange={this.handleUserInput.bind(this, 'budget')}/>
              <div className='placeholder'>estimated budget</div>
            </div>

            <div className='form-field date' onClick={this.focusInput.bind(this, 'date')} onFocus={this.focusInput.bind(this, 'date')}>
              <input className='input-elem' type='date' onChange={this.handleUserInput.bind(this, 'date')}/>
              <div className='placeholder'>event date</div>
            </div>
          </div>

          <div className='service-note'>Please select all services you are interested in:</div>

          <div className='checkbox-container'>
            <div className='form-field dj'>
              <div className={'checkbox ' + (this.state.dj ? 'checked' : '')} onClick={this.toggleCheckbox.bind(this, 'dj')}>
                <div className='label'>dj</div>
                <img className='checkmark' src={Utility.buildAssetUrl('icons/checkmark.svg')} />
              </div>
            </div>

            <div className='form-field lighting'>
              <div className={'checkbox ' + (this.state.lighting ? 'checked' : '')} onClick={this.toggleCheckbox.bind(this, 'lighting')}>
                <div className='label'>lighting</div>
                <img className='checkmark' src={Utility.buildAssetUrl('icons/checkmark.svg')} />
              </div>
            </div>

            <div className='form-field baraat'>
              <div className={'checkbox ' + (this.state.baraat ? 'checked' : '')} onClick={this.toggleCheckbox.bind(this, 'baraat')}>
                <div className='label'>mobile baraat</div>
                <img className='checkmark' src={Utility.buildAssetUrl('icons/checkmark.svg')} />
              </div>
            </div>

            <div className='form-field rentals'>
              <div className={'checkbox ' + (this.state.rentals ? 'checked' : '')} onClick={this.toggleCheckbox.bind(this, 'rentals')}>
                <div className='label'>equipment rentals</div>
                <img className='checkmark' src={Utility.buildAssetUrl('icons/checkmark.svg')} />
              </div>
            </div>
          </div>

          <div className='form-field message' onClick={this.focusInput.bind(this, 'message')} onFocus={this.focusInput.bind(this, 'message')}>
            <textarea className='input-elem' onChange={this.handleUserInput.bind(this, 'message')}/>
            <div className='placeholder'>message</div>
          </div>

          <button className={'submit-btn dark'}>submit</button>
        </form>

        <div className='bottom-bar'>
          <div className='bottom-container'>
            <div className='developer-credits'>Developed by <a href='http://mach4.app/' target='_blank'>MACH4 Technologies Inc.</a></div>

            <div className='account-links'>
              <a href='' target='_blank'><img className='account-link-item' src={Utility.buildAssetUrl('logos/instagram.svg')}/></a>
              <a href='' target='_blank'><img className='account-link-item' src={Utility.buildAssetUrl('logos/facebook.svg')}/></a>
              <a href='' target='_blank'><img className='account-link-item' src={Utility.buildAssetUrl('logos/yelp.svg')}/></a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Footer;
