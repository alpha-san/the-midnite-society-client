import React, { Component } from 'react';
import './Home.css';

const Home = () => (
<div>
<div className="video-container">
<video className="video video-bg" loop="loop" muted="" width="300" height="150">
      <source src="https://themidnitesociety.blob.core.windows.net/core/TMS_HOME.webm" type="video/webm" />
  </video>

  <div className="container content">
    {/*<h1 className="hero-header">WE ARE <span style={{color: '#6e1d75'}}>THE MIDNITE SOCIETY</span></h1>*/}
    <h1 className="hero-header">WE ARE <span>THE MIDNITE SOCIETY</span></h1>
    <p className="lead" >All humans are multi-faceted. THE MIDNITE SOCIETY is a squad of individuals from different walks of life united under their drive to CREATE.</p>


  <div className="socialMediaSection">
      <a href="https://www.facebook.com/themidnitesocietycollective/" className="socialMediaLink"><img src="https://themidnitesociety.blob.core.windows.net/core/facebook.png" /></a>
      <a href="https://soundcloud.com/tmscollective" target="_blank" className="socialMediaLink"><img src="https://themidnitesociety.blob.core.windows.net/core/soundcloud.png" /></a>
      <a href="https://twitter.com/whoisTMS" target="_blank" className="socialMediaLink"><img src="https://themidnitesociety.blob.core.windows.net/core/twitter.png" /></a>
      <a href="https://www.youtube.com/channel/UCDnyxqKo5C4buATtCtcqYNg" target="_blank" className="socialMediaLink"><img src="https://themidnitesociety.blob.core.windows.net/core/youtube.png" /></a>
      <a href="https://www.instagram.com/tmscollective/" target="_blank" className="socialMediaLink"><img src="https://themidnitesociety.blob.core.windows.net/core/instagram.png" /></a>
  </div>
  </div>
</div>

<div className="video-container">
<video className="video video-bg" loop="loop" muted="" width="300" height="150">
      <source src="https://themidnitesociety.blob.core.windows.net/core/TMS_WORK.webm" type="video/webm" />
  </video>

  <div id="work-section" className="container content">
    <h1 className="hero-header">A TEAM OF CREATIVES GOING IN ON OUR PASSIONS</h1>
    <p className="lead" >I promise you, they don’t want you to jetski, they don’t want you to smile. To be successful you’ve got to work hard, to make history, simple, you’ve got to make it. Life is what you make it, so let’s make it. Hammock talk come soon. Bless up.</p>

    <div>
        <a className="herolink" href="#">I Can't Stay (I Gotta Go)</a> &nbsp; | &nbsp; 
        <a className="herolink" href="#">The Preview</a> &nbsp; | &nbsp;
        <a className="herolink" href="#">LEAN</a>
    </div>

    <a className="tms-cust-button-link" href="#work">
        <div className="tms-cust-button">
            SEE OUR WORK
        </div>
    </a>

  </div>
</div>

<div id="blog-section" className="video-container">
<video className="video video-bg" loop="loop" muted="" width="300" height="150">
      <source src="https://themidnitesociety.blob.core.windows.net/core/TMS_BLOG.webm" type="video/webm" />
  </video>

  <div className="container content">
      <h1 className="hero-header">BLOG</h1>
      <p className="lead">Every chance I get, I water the plants, Lion! Learning is cool, but knowing is better, and I know the key to success. The key is to drink coconut, fresh coconut, trust me. I’m up to something.</p>


    <div>
        <a className="herolink" href="#">"How to Market Yourself"</a> &nbsp; | &nbsp; 
        <a className="herolink" href="#">Ableton Sampling 101</a> &nbsp; | &nbsp; 
        <a className="herolink" href="#">Making Connections</a>
    </div>

    <a className="tms-cust-button-link" href="#blog">
        <div className="tms-cust-button" >
            DROP ME SOME KNOWLEDGE
        </div>
    </a>

  </div>
</div>

<div className="video-container">
<video className="video video-bg" loop="loop" muted="" width="300" height="150">
      <source src="https://themidnitesociety.blob.core.windows.net/core/TMS_STORE.webm" type="video/webm" />
  </video>

  <div className="container content">
      <h1 className="hero-header">MORE THAN A BRAND</h1>
      <p className="lead" >We the best. Special cloth alert. Find peace, life is like a waterfall, you’ve gotta flow.</p>

    <a className="tms-cust-button-link" href="#shop">
        <div className="tms-cust-button">
            QUALITY CLOTH			        
        </div>
    </a>

  </div>
</div>

<div id="contact-section" className="video-container">
<video className="video video-bg" loop="loop" muted="" width="300" height="150">
      <source src="https://themidnitesociety.blob.core.windows.net/core/TMS_CONTACT.webm" type="video/webm" />
  </video>

  <div className="container content">
      <h1 className="hero-header">REACH OUT</h1>
      <p className="lead">"Questions about the industry? Wanna collab? Have more hate to fuel us? Don't be afraid to hit us up!"</p>

    <a className="tms-cust-button-link" href="#contact">
        <div className="tms-cust-button" >
            I HAVE SOMETHING TO SAY	        
        </div>
    </a>

  </div>
</div>
</div>
);

export default Home;