import React, { Component } from 'react';
import { Route, Switch, Link } from 'react-router-dom';

class FullArtists extends Component {
  state = {artists: []};

  componentDidMount() {
    fetch('/api/artists')
        .then(res => res.json())
        .then(artists => this.setState({artists}));

    console.log(this.state.artists);
  }

  render() {
    return (
    <div>
        <h1>Artists</h1>
        <ul>
            {
              this.state.artists.map(a => (
                    <li key={a.id}>
                       <Link to={`/Artists/${a.id}`}>{a.name}</Link> 
                    </li>
                ))
            }
        </ul>
    </div>
    )
  };
}

class Artist extends Component {
  state = {artist: {}};

  componentDidMount() {
    console.log(this.props.match.params.number);

    fetch('/api/artist/${this.props.match.params.number}')
    .then(res => res.json())
    .then(artist => this.setState({artist}));

    console.log(this.state.artist);
  }

  render() {
    if (!this.state.artist) {
      return <div>Sorry, but the artist was not found</div>
    }
    return (
      <div>
        <h1>{this.state.artist.name}</h1>
        <Link to='/Artists'>Back</Link>
      </div>
    )
  }
}
/*
const Artist = (props) => {
  const Artist = ArtistsAPI.get(
    parseInt(props.match.params.number, 10)
  )
  let Artist = {};
  fetch('/api/artists/id=${props.match.params.number}')
    .then(res => res.json())
    .then(artist => {Artist = artist});
  if (!Artist) {
    return <div>Sorry, but the artist was not found</div>
  }
  return (
    <div>
      <h1>{Artist.name}</h1>
      <Link to='/Artists'>Back</Link>
    </div>
  )
}*/

const Artists = () => (
  <Switch>
    <Route exact path='/Artists' component={FullArtists}/>
    <Route path='/Artists/:number' component={Artist}/>
  </Switch>
)

export default Artists;