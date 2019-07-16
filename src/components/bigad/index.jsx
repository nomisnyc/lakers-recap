// components/bigad 
//     stateless
//     pulls in the fill width banner ad on the bottom


import React from 'react'
import { Col } from 'react-bootstrap';

const BigAd = props => (
    <Col xs={{span: 12}} md={12} className="sidebar-col">
        <div className="ad-wrap">
            <img src="/images/ads/advertisement-728x90.jpg" alt="Delta Ad" className="ad"/>
        </div> 
    </Col>
)

export default BigAd;

