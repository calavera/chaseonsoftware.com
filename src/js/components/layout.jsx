var React = require('react');
var Router = require('react-router');
var RouteHandler = Router.RouteHandler;

var Head = React.createClass({
    render () {
        var siteTitle = 'chaseadams.io: intentional input for outstanding output';
        var title = this.props.attributes && this.props.attributes.title ?
            this.props.attributes.title : siteTitle;

        var description = this.props.attributes && this.props.attributes.description ?
            this.props.attributes.description : "I am Chase Adams. Engineer at Zappos. Life Learner. Programming Polyglot.";

        var img = this.props.attributes && this.props.attributes.img ?
            this.props.attributes.img : "https://en.gravatar.com/userimage/7669606/70535a5544c65e07c71b541fda761f29.jpg?size=500";

        var SITE_URL = 'http://chaseadams.io/';
        var slug = this.props.attributes && this.props.attributes.slug ?
            SITE_URL + this.props.attributes.slug + '/' : SITE_URL;

        return (
            <head>
                <title>{title}</title>
                <link rel="shortcut icon" href="/favicon.ico?v=2" type="image/x-icon" />
                <link href='http://fonts.googleapis.com/css?family=Merriweather:400,700,400italic,700italic' rel='stylesheet' type='text/css' />
                <link href="/css/app.css" rel="stylesheet" type="text/css" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <meta name="description" content={description} />
                <meta property="og:title" content={title} />
                <meta property="og:url" content={slug} />
                <meta property="og:type" content="website" />
                <meta property="og:image" content={img} />
                <meta property="og:description" content={description} />

                <meta name="dns" content="digital ocean" />
                <meta name="version" content="1.0.26" />
                <link href="http://gmpg.org/xfn/11" rel="profile" />
                <meta http-equiv="content-type" content="text/html; charset=utf-8" />
            </head>
        );
    }
});


var Layout = React.createClass({

    render () {
        return (
            <html>
                <Head {...this.props} />
                <body>
                    <RouteHandler {...this.props} />
                    <script src="//static.getclicky.com/js" type="text/javascript"></script>
                    <noscript><p><img alt="Clicky" width="1" height="1" src="//in.getclicky.com/100842593ns.gif" /></p></noscript>
                    <script src="/js/bundle.js" />
                </body>
            </html>
        );
    }
});

module.exports = Layout;
