// components/siderbar 
//     stateless
//     renders box-score link, twitter, youtube video and small ad

import React from 'react'
import { Col, Button } from 'react-bootstrap';
import { TwitterTweetEmbed } from 'react-twitter-embed';

import "./css.scss";

const SideBar = props => (
    <Col xs={{span: 12}} md={4} className="sidebar-col">
        <div className="box-score">
        <a href="https://www.nba.com/gametracker/#/20180708/LALCHI/lakers/analysis" target ="_blank"><Button variant="outline-dark">Box Score</Button></a>
        
        </div>
        <div className='tweets'>
            <div className="tweet">
                <p>Tweet of the Night</p>
                <TwitterTweetEmbed
                tweetId={'1016182875446636544'}
                />
            </div>
            <div className="tweet">
                <p>Final post-game graphic</p>
                <TwitterTweetEmbed
                tweetId={'1016192840454455296'}
                />
            </div>
        </div>
        <div className="postgame">
            <p>Postgame Breakdown Clip</p>
            <div className="iframe-container">
                <iframe width="100%" height="100%" src="https://www.youtube.com/embed/mgWtTPPJv6c" frameBorder="0" allow="accelerometer; encrypted-media; gyroscope; picture-in-picture" allowFullScreen title="YoutubeFrame"></iframe>
            </div>
        </div>
        <div className="ad-wrap">
            <img src="/images/ads/advertisement-300x250.jpg" alt="Ad" className="ad"/>
        </div>
    </Col>
);
export default SideBar;
