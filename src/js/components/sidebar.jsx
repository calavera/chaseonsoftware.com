var React = require('react');
var Social = require('./social.jsx');

var Sidebar = React.createClass({
    render () {
        return (
            <div id="sidebar">
                <div className="component">
                    <h1>About Me</h1>
                    <p>I'm a Mobile Web Engineer at Zappos.com and part-time Frontend Instructor at <a href="http://www.theironyard.com">The Iron Yard</a>.</p>
                    <p>I'm a life hacker.</p>
                    <p><em>I believe that intentional input, with the ability to look back pragmatically at what works and what doesn't is the key to building an effective life.</em></p>
                    <p><a href="/about">Learn More</a></p>
                </div>
                <Social />
            </div>
        );
    }
});

module.exports = Sidebar;
