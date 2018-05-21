import React from 'react';

import Header  from '../building-blocks/header';
import Welcome from '../building-blocks/welcome';
import Footer  from '../building-blocks/footer';

export default function Home() {
  return (
    <div className="rwb-home">
      <Header></Header>
      <Welcome></Welcome>
      <Footer></Footer>
    </div>
  );
}
