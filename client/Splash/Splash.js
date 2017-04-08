import React from 'react';
import { Row, Col } from 'react-flexbox-grid';
import splashImage from './cdcoverart.jpg';

const splashStyle = {
  background: `url(${splashImage}) no-repeat center, 0px 0px`,
  backgroundSize: 'cover',
  height: 1500,
}

const Splash = () => (
  <Row between='xs'>
    <Col xs={12} sm={9}>
      <div style={splashStyle} />
    </Col>
    <Col xs={12} sm={3}>
      Placeholder for the coming soon stuff
    </Col>
  </Row>
);

export default Splash;
