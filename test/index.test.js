var assert = require('assert')
    disqus = require(__dirname + '/../lib/index.js').helpers.disqus
  , site = { config: { url: 'http://popjs.com' } };

// Ensure the plugin respects the developer setting
assert.ok(
  disqus.apply(site, [{ url: '/example/url' }, 'popjs']).match(
    /developer = 0/
  ) 
);

assert.ok(
  disqus.apply(site, [{ url: '/example/url' }, 'popjs', true]).match(
    /developer = 1/
  ) 
);
