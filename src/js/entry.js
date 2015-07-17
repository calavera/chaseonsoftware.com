require('normalize.css/normalize.css');
require('../sass/app.scss');
require("static?!../favicon.ico?output=favicon.ico");
var React = require('react');
// var Router = require('react-router');
// global.isInitial = true;

var GA = require('./3party/googleAnalytics.js');
var KISS = require('./3party/kissAnalytics.js');
var CLICKY = require('./3party/clickyAnalytics.js');

if (!(/^dev/).test(window.location.hostname)) {
    GA();
    KISS();
    // CLICKY();

    try{ clicky.init(100842593); }catch(e){}
}

// var Routes = require('./routes.jsx');

// Router.run(Routes, Router.HistoryLocation, (Root) => {
//   var initialProps = [];
//   React.render(React.createElement(Root, initialProps), document.getElementById('app'));
// });

 var disqus_shortname = 'realchaseadams';

/* * * DON'T EDIT BELOW THIS LINE * * */
(function() {
    if (!document.getElementById('disqus_thread')) return;
    var dsq = document.createElement('script'); dsq.type = 'text/javascript'; dsq.async = true;
    dsq.src = '//' + disqus_shortname + '.disqus.com/embed.js';
    (document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]).appendChild(dsq);
})();
