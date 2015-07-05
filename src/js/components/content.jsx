var React = require('react');
var Router = require('react-router');
var RouteHandler = Router.RouteHandler;
var Sidebar = require('./sidebar.jsx');

var Content = React.createClass({
    render () {
        return (
            <div id="content">
                <div id="main">
                    <RouteHandler {...this.props} />
                </div>
                <Sidebar />
            </div>
        );
    }
});

module.exports = Content;
