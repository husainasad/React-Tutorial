import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import HeaderComponent from './header';
import InfoComponent from './info';
import FooterComponent from './footer';

function PageContent(){
  return (
      <>
          <HeaderComponent/>
          <InfoComponent/>
          <FooterComponent/>
      </>
  )
}

ReactDOM.render(<PageContent/>, document.getElementById("root"))