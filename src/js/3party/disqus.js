var disqus = function (config) {
    if (disqus.loaded) {
        window.DISQUS.reset({
            reload: true,
            config: function () {
                this.page.identifier = config.identifier;
                this.page.url        = config.url;
                this.page.title      = config.title;
            }
        });
    } else {
        var body = "var disqus_shortname  = \"" + 'realchaseadams' + "\";\n" +
        "var disqus_title      = \"" + config.title      + "\";\n" +
        "var disqus_identifier = \"" + config.identifier + "\";\n" +
        "var disqus_url        = \"" + config.url        + "\";\n";
        if (config.developer) {
            body +=  "var disqus_developer  = 1;\n"
        }

        appendScriptTagWithBody(body);

        (function() {
            var dsq = document.createElement('script'); dsq.type = 'text/javascript'; dsq.async = true;
            dsq.src = '//' + disqus_shortname + '.disqus.com/embed.js';
            (document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]).appendChild(dsq);
        })();

        disqus.loaded = true;
    }
};

function appendScriptTagWithBody(body) {
  var dso   = document.createElement("script");
  dso.type  = "text/javascript";
  dso.async = true;
  dso.text  = body;
  document.getElementsByTagName('body')[0].appendChild(dso);
}

module.exports = disqus;
