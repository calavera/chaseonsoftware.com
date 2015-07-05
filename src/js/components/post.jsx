var React = require('react');
var Router = require('react-router');
var HistoryLocation = Router.HistoryLocation;
var disqus = require('../3party/disqus.js');
var moment = require('moment-timezone');
var zone = 'America/Los_Angeles';
moment.tz.setDefault(zone);
var marked = require('marked');
marked.setOptions({ smartypants: false });
var request = require('superagent');

var Post = React.createClass({
    getInitialState () {
        return {
            post: {
                attributes: {
                    title: ''
                },
                body: ''
            }
        }
    },

    isClient () {
       return typeof window != 'undefined' && window.document;
    },

    buildRequestUrl (params) {
        var slug = '';
        if (params.year) slug += '/' + params.year;
        if (params.month) slug += '/' + params.month;
        slug += '/' + params.slug;
        slug += '/index.json';
        return slug;
    },

    getPostData (params) {
        if (this.isClient()) {
            request.get(this.buildRequestUrl(params), (err, response) => {
                if (err) throw err;

                this.setState({
                    post: response.body
                });
            });
        }
    },

    componentWillMount () {
        this.getPostData(this.props.params);
    },

    componentWillReceiveProps (nextProps) {
        this.getPostData(nextProps.params);
    },

    componentDidUpdate () {
        if (this.state.post.attributes.slug === undefined) return;

        disqus({
            url: 'http://' + window.location.hostname + '/' + this.state.post.attributes.slug,
            identifier: this.state.post.attributes.slug,
            title: this.state.post.attributes.title
        });

        if (global.ga) global.ga('send', 'pageview', this.state.post.attributes.slug + '/');
    },

    render () {
        var post = this.isClient() ? this.state.post : this.props;
        var title = post.attributes.title;
        return (
            <div className="post">
                <div>
                    <time>{post.attributes.date ? moment.tz(post.attributes.date, zone).format("MMMM DD, YYYY") : ''}</time>
                </div>
                <h1 className="post-title">{title}</h1>
                <div className="post-summary" dangerouslySetInnerHTML={{ __html: marked(post.body)}} />
                <div id="disqus_thread" />
            </div>
        );
    }
});

module.exports = Post;
