var React = require('react');
var Router = require('react-router');
var Link = Router.Link;
var Content = require('./content.jsx');
var Footer = require('./footer.jsx');

var App = React.createClass({
    render () {
        return (
            <div id="app">
                <div id="globalNavContainer">
                    <ul id="globalNav" className="nav cf">
                        <li>
                            <h1><a href="/" className="site-title">Chase Adams</a></h1>
                            <h2>intentional input for outstanding output.</h2>
                        </li>
                        <li>
                         <ul className="site-nav">
                            <li><Link to="page" params={{ slug: 'about' }}>About</Link></li>
                            <li><Link to="home" href="/">Blog</Link></li>
                        </ul>
                        </li>
                    </ul>
                </div>
                <Content {...this.props} />
                <Footer />
            </div>
        );
    }
});

module.exports = App;
