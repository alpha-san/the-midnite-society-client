import React, { Component } from 'react';
import ArtistsAPI from '../ArtistsAPI';
import { Route, Switch, Link } from 'react-router-dom';

const FullArtists = () => (
    <div>
        <h1>Artists</h1>
        <ul>
            {
                ArtistsAPI.all().map(a => (
                    <li key={a.id}>
                       <Link to={`/Artists/${a.id}`}>{a.name}</Link> 
                    </li>
                ))
            }
        </ul>
    </div>
)

const Artist = (props) => {
  const Artist = ArtistsAPI.get(
    parseInt(props.match.params.number, 10)
  )
  if (!Artist) {
    return <div>Sorry, but the artist was not found</div>
  }
  return (
    <div>
      <h1>{Artist.name}</h1>
      <Link to='/Artists'>Back</Link>
    </div>
  )
}

const Artists = () => (
  <Switch>
    <Route exact path='/Artists' component={FullArtists}/>
    <Route path='/Artists/:number' component={Artist}/>
  </Switch>
)

export default Artists;