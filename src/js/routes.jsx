var React = require('react');
var Router = require('react-router');
var Route = Router.Route;
var DefaultRoute = Router.DefaultRoute;

var Layout = require('./components/layout.jsx');
var Post = require('./components/post.jsx');
var Home = require('./components/home.jsx');
var App = require('./components/app.jsx');

var Routes = (
    <Route name="app" handler={Layout}>
        <Route name="content" handler={App}>
            <Route name="home" path="/" handler={Home} />
            <Route name="post" path="/:year/:month/:slug/" handler={Post} />
            <Route name="page" path="/:slug/" handler={Post} />
            <DefaultRoute handler={Home} />
        </Route>
    </Route>
);

var ClientRoutes = (
    <Route name="content" handler={App}>
        <Route name="home" path="/" handler={Home} />
        <Route name="post" path="/:year/:month/:slug/" handler={Post} />
        <Route name="page" path="/:slug/" handler={Post} />
        <DefaultRoute handler={Home} />
    </Route>
);



module.exports = isServer() ? Routes : ClientRoutes;

function isServer () {
   return !(typeof window != 'undefined' && window.document);
}
