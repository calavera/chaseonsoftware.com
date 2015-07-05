var React = require('react');

var Footer = React.createClass({
    render () {
        return (
            <div id="footer">
                Static site generated with React, Webpack and Sass. <br /> Find the source for <a href="https://github.com/chaseadamsio/chaseadams.io">chaseadams.io on Github</a>.
            </div>
        );
    }
});

module.exports = Footer;
