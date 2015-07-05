var React = require('react');

var Social = React.createClass({
   render () {
    return (
        <div className="component">
            <h1>Connect With Me</h1>
            <ul>
                <li><a href="http://www.twitter.com/chaseadamsio">chaseadamsio on twitter</a></li>
                <li><a href="http://www.github.com/chaseadamsio">chaseadamsio on github</a></li>
                <li><a href="http://www.instagram.com/chaseadamsio">chaseadamsio on instagram</a></li>
            </ul>
        </div>
    );
   }
});

module.exports = Social;
