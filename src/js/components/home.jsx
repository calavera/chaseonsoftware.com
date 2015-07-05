var React = require('react');
var Router = require('react-router');
var Link = Router.Link;
var moment = require('moment-timezone');
var zone = 'America/Los_Angeles';
moment.tz.setDefault(zone);
var request = require('superagent');

var Home = React.createClass({
    getInitialState () {
        return {
            posts: []
        };
    },

    isClient () {
       return typeof window != 'undefined' && window.document;
    },

    getJSON () {
        request.get('index.json', (err, response) => {
            if (err) throw err;

            this.setState({
                posts: response.body.posts
            });
        });
    },

    componentWillMount () {
        if (this.isClient()) this.getJSON();
    },

    componentDidUpdate () {
        if (global.ga) global.ga('send', 'pageview', 'http://' + window.location.hostname + '/');
    },

    render () {
        var posts = this.props.posts ? this.props.posts : this.state.posts;
        posts = posts.map(function (post, idx) {
            var slugSplit = post.attributes.slug.split('/');
            if (post.attributes.hasOwnProperty('blogroll') && post.attributes.blogroll === false) {
                return;
            }

            return (
                <div key={idx} className="post">
                    <time>{moment.tz(post.attributes.date, zone).format("YYYY/MM/DD")}</time>
                    <Link to="post" params={{ year: slugSplit[0], month: slugSplit[1], slug: slugSplit[2] }} className="post-title">{post.attributes.title}</Link>
                </div>
            );
        });

        return (
            <div className="blogroll">
                {posts}
            </div>
        );
    }
});

module.exports = Home;
