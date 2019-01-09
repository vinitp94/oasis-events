import React      from 'react';
import Utility    from '../../utility';
import _          from 'lodash';
import {Carousel} from 'react-responsive-carousel';

import Header from '../building-blocks/header';
import Footer from '../building-blocks/footer';

class Home extends React.Component {
  componentDidMount() {
    let fadeItemClassnames = [];
    let fadeItems = [];

    _.forEach(fadeItemClassnames, (classname) => {
      _.forEach($('.' + classname), (elem) => {
        fadeItems.push(elem);
      });
    });

    $(document).scroll(() => {
      let currentScrollTop = $(document).scrollTop();

      if (currentScrollTop > 500) {
        $('.oe-header.dynamic').addClass('show');
      } else {
        $('.oe-header.dynamic').removeClass('show');
      }

      _.forEach(fadeItems, (item) => {
        if ((currentScrollTop + (0.8 * window.innerHeight)) > $(item).offset().top) {
          $(item).addClass('visible');
        }
      });
    });
  }

  renderHeaderCarousel() {
    return (
      <div className='header-carousel'>
        <Carousel showThumbs={false} showArrows={false} showStatus={false} showIndicators={false} stopOnHover={false} autoPlay infiniteLoop interval={8000} transitionTime={1200}>
          <div>
            <img className='carousel-img' src={Utility.buildAssetUrl('images/cdj.jpg')}/>

            <div className='img-cover-container'>
              <div className='img-cover'>
              </div>
            </div>
          </div>

          <div>
            <img className='carousel-img' src={Utility.buildAssetUrl('images/spotlights.jpg')}/>

            <div className='img-cover-container'>
              <div className='img-cover'>
              </div>
            </div>
          </div>

          <div>
            <img className='carousel-img' src={Utility.buildAssetUrl('images/lasers.jpg')}/>

            <div className='img-cover-container'>
              <div className='img-cover'>
              </div>
            </div>
          </div>
        </Carousel>
      </div>
    );
  }

  render() {
    return (
      <div className='oe-home'>
        <Header classToApply={'static'}></Header>
        <Header classToApply={'dynamic'}></Header>

        {this.renderHeaderCarousel()}

        <div className='page-container'>
          <div className='section about'>
            <div className='section-title'>about us</div>
          </div>

          <div className='section services'>
            <div className='section-title'>services</div>
          </div>

          <div className='section testimonials'>
            <div className='section-title'>testimonials</div>
          </div>
        </div>

        <Footer></Footer>
      </div>
    );
  }
}

export default Home;
