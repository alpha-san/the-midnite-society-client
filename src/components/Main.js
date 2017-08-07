import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './Home';
import Blog from './Blog';
import Artists from './Artists';

const Main = () => (
    <main>
        <Switch>
            <Route exact path='/' component={Home}/>
            <Route exact path='/blog' component={Blog}/>
            <Route path='/Artists' component={Artists}/>
        </Switch>
    </main>
);

export default Main;