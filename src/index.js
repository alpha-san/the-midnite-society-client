import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';

const BlogAPI = {
    blogposts: [
        { id: 1, title: "My New Blog", author: "allanxaesthetics", date: "8/7/17", content: "Lorem Khaled Ipsum is a major key to success. In life you have to take the trash out, if you have trash in your life, take it out, throw it away, get rid of it, major key. A major key, never panic. Don’t panic, when it gets crazy and rough, don’t panic, stay calm. Life is what you make it, so let’s make it. You see that bamboo behind me though, you see that bamboo? Ain’t nothin’ like bamboo. Bless up. In life there will be road blocks but we will over come it. Hammock talk come soon." }
    ],
    all: function() { return this.blogposts },
};

const ArtistAPI = {
    artists: [
        { id: 1, name: "allanxaesthetics", soundcloudLink: "soundcloud.com/kurenobeats" },
        { id: 2, name: "Dark Fade Ricochet", soundcloudLink: "soundcloud.com/dfr" },
        { id: 3, name: "Pyrex Vuitton", soundcloudLink: "soundcloud.com/pv" },
        { id: 4, name: "DPIH", soundcloudLink: "soundcloud.com/dpih" },
        { id: 5, name: "Yun J", soundcloudLink: "soundcloud.com/yunj" },
        { id: 6, name: "KC", soundcloudLink: "soundcloud.com/KC" }
    ],
    all: function() { return this.artists },
    get: function(id) { 
        const isArtist = a => a.id === id;
        return this.artists.find(isArtist);
    }
};

const Home = () => (
    <div>
        <h1>Welcome to The Midnite Society!</h1>
    </div>
);

const Blog = () => (
    <div>
        <h1>Blog</h1>
        <div>
            {
            BlogAPI.all().map(post => (
                <div key={post.id}>
                    <h3>{post.title}</h3>
                    <h4>Posted by: {post.author}</h4>
                    <p>{post.date}</p>

                    <div>
                        {post.content}
                    </div>
                </div>
            ))
            }
        </div>
    </div>
);

const AllArtists = () => (
    <div>
        <h1>Artists</h1>
        <ul>
            {
                ArtistAPI.all().map(a => (
                    <li key={a.id}>
                       <Link to={`/artists/${a.id}`}>{a.name}</Link> 
                    </li>
                ))
            }
        </ul>
    </div>
);

const Artist = ({ match }) => (
  <div>
    <h1>This Artist</h1>
    <h3>{match.params}</h3>
  </div>
);

const Artists = ({match}) => (
    <Switch>
        <Route path={`${match.url}/:id`} component={Artist}/>
        <Route exact path={match.url} component={AllArtists}/>
    </Switch>
);

const Main = () => (
    <main>
        <Switch>
            <Route exact path='/' component={Home}/>
            <Route exact path='/blog' component={Blog}/>
            <Route exact path='/artists' component={Artists}/>
        </Switch>
    </main>
);

const Header = () => ((
    <div id="navbar" className="collapse navbar-collapse">
          <ul className="nav navbar-nav">
            <li className="active"><Link to='/'>Home</Link></li>
            <li><Link to='/blog'>Blog</Link></li>
            <li><Link to='/artists'>Artists</Link></li>
          </ul>
    </div>
));

const App = () => (
    <div>
        <Header />
        <Main />
    </div>
);

ReactDOM.render((
    <BrowserRouter>
        <App />
    </BrowserRouter>
), document.getElementById('root'));
registerServiceWorker();
