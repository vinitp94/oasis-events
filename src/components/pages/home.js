import React from 'react';

import Header  from '../building-blocks/header';
import Footer  from '../building-blocks/footer';

class Home extends React.Component {
  constructor(props) {
    super(props);

    document.title = 'Home';
    window.scrollTo(0, 0);
  }

  render() {
    return (
      <div className='rwb-home page'>
        <Header></Header>

        <div className='home-container content-container'>
          <div className="title">React Website Boilerplate</div>
          <a className="github-link" target="_blank" href="https://github.com/vinitp94/react-website-boilerplate">Github repository</a>
        </div>

        <Footer></Footer>
      </div>
    );
  }
}

export default Home;
