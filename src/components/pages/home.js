import React   from 'react';

import Header from '../building-blocks/header';
import Footer from '../building-blocks/footer';

class Home extends React.Component {
  constructor(props) {
    super(props);
  }

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

  render() {
    return (
      <div className={ 'oe-home ' + this.state.bgList[0] }>
        <Header classToApply={ 'static' }></Header>
        <Header classToApply={ 'dynamic' }></Header>

        <div className='page-container'>
          <div className='placeholder'>Placeholder</div>
        </div>

        <Footer></Footer>
      </div>
    );
  }
}

export default Home;
