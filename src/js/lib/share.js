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

    render () {
        console.log(this.state);
        return (
            <ul className="social_share">
                <li className="fb" onClick={this.fbShare}><i className="fa fa-facebook" /><span>{this.state.fb_likes}</span></li>
                <li className="tw"><i className="fa fa-twitter" /><span>{this.state.tw_shares}</span></li>
                <li className="li"><i className="fa fa-linkedin" /><span>{this.state.li_shares}</span></li>
            </ul>
        );
    }
});

React.render(<Share />,
    document.getElementById('share_component'));
