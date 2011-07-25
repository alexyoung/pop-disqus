module.exports = {
  helpers: {
    /**
      * Includes Disqus universal code.
      *
      * Disqus documentation: http://docs.disqus.com/help/2/
      *
      * @param {Object} A `Post` object
      * @param {String} Your site's shortname
      * @param {Boolean} Include developer code?
      *
      * @return {String}
      */
    disqus: function(post, shortname, developer) {
      return ''
      + '<script type="text/javascript">'
      + 'var disqus_developer = ' + (developer ? 1 : 0 ) + ';'
      + '</script>'
      + '<script type="text/javascript">'
      + "var disqus_shortname = '" + shortname + "';"
      + '(function () {'
      + 'var s = document.createElement(\'script\'); s.async = true;'
      + "s.src = 'http://disqus.com/forums/" + shortname + "/count.js';"
      + '(document.getElementsByTagName(\'HEAD\')[0] || document.getElementsByTagName(\'BODY\')[0]).appendChild(s);'
      + '}());'
      + '</script>'
      + "<div id=\"disqus_thread\"></div>"
      + "<script type=\"text/javascript\">"
      + "    var disqus_url = '" + this.config.url + post.url + "/';"
      + "    (function() {"
      + "        var dsq = document.createElement('script'); dsq.type = 'text/javascript'; dsq.async = true;"
      + "        dsq.src = 'http://' + disqus_shortname + '.disqus.com/embed.js';"
      + "        (document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]).appendChild(dsq);"
      + "    })();"
      + "</script>"
      + "<noscript>Please enable JavaScript to view the <a href=\"http://disqus.com/?ref_noscript\">comments powered by Disqus.</a></noscript>"
      + "<a href=\"http://disqus.com\" class=\"dsq-brlink\">blog comments powered by <span class=\"logo-disqus\">Disqus</span></a>\n";
    }
  }
};
