import React, { Component } from 'react';
import { Link } from 'react-router-dom';

const Header = () => ((
    <div id="navbar" className="collapse navbar-collapse">
          <ul className="nav navbar-nav">
            <li className="active"><Link to='/'>Home</Link></li>
            <li><Link to='/blog'>Blog</Link></li>
            <li><Link to='/Artists'>Artists</Link></li>
          </ul>
    </div>
));

export default Header;