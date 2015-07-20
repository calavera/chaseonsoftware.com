var request = require('superagent');
require('superagent-jsonp')(request);

var url = 'http://chaseadams.io' + window.location.pathname;
var data = {};

var Share = React.createClass({
    getInitialState() {
        return {
            fb_likes: '',
            tw_shares: '',
            li_shares: ''
        }
    },

    componentWillMount() {
        request.get('https://graph.facebook.com/fql?q=select%20%20like_count%20from%20link_stat%20where%20url=%22' + url + '%22').jsonp().end((err, resp) => {
            if (err) return err;
            data.fb_likes = resp.body.data[0].like_count;

            request.get('https://cdn.api.twitter.com/1/urls/count.json?url=' + url).jsonp().end((err, resp) => {
                if (err) return err;
                data.tw_shares = resp.body.count;
                request.get("https://www.linkedin.com/countserv/count/share?url=" + url).jsonp().end((err, resp) => {
                    if (err) return err;
                    data.li_shares = resp.body.count;

                    this.setState(data);
                });
            });
        });
    },

    fbShare () {
        FB.ui({
            method: 'share',
            href: url,
          });
    },

    twShare() {
        var w = 845;
        var h = 650;
        var left = (screen.width/2)-(w/2);
        var top = (screen.height/2)-(h/2);
        window.open(
            'http://twitter.com/share?text=' + post.title + '&url=' + 'http://chaseadams.io/' + post.slug,
            '',
            'scrollbars=yes, width='+w+', height='+h+', screenY='+top+', screenX='+left
        );
    },

    liShare() {
        var w = 845;
        var h = 508;
        var left = (screen.width/2)-(w/2);
        var top = (screen.height/2)-(h/2);
        window.open(
            'https://www.linkedin.com/shareArticle?mini=true&url=' + post.slug + '&title=' + post.title + '&summary=' + post.description,
            '',
            'scrollbars=yes, width='+w+', height='+h+', screenY='+top+', screenX='+left
        );
    },

    render () {

        return (
            <ul className="social_share">
                <li className="fb" onClick={this.fbShare}><i className="fa fa-facebook" /><span>{this.state.fb_likes}</span></li>
                <li className="tw" onClick={this.twShare}><i className="fa fa-twitter" /><span>{this.state.tw_shares}</span></li>
                <li className="li" onClick={this.liShare}><i className="fa fa-linkedin" /><span>{this.state.li_shares}</span></li>
            </ul>
        );
    }
});

React.render(<Share />,
    document.getElementById('share_component'));
