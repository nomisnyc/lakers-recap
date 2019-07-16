import React from 'react';
import ReactDOM from 'react-dom';
import { Container, Row} from 'react-bootstrap';
import "./scss/base.scss";
import * as serviceWorker from './serviceWorker';

import NavBar from './components/navbar/';
import Main from './components/main';
import SideBar from './components/sidebar';
import BigAd from './components/bigad';
import GalleryImages from './components/gallery';


ReactDOM.render(
    <div>
      {/*<NavBar /> */}
      <Container>
        <Row>
          <Main />
          <SideBar />
        </Row>
        <Row>
          <GalleryImages />
        </Row>
        <Row>
          <BigAd />
        </Row>
      </Container>
    </div>,
    document.getElementById('root')
  );

serviceWorker.unregister();
module.hot.accept();