const path = 'https://localhost:5000';
const version = 0;

module.exports = {
  staticFileGlobs: [
    '/index.html',
    '/manifest.json',
    '/bower_components/webcomponentsjs/webcomponents-lite.js'
  ],
  runtimeCaching: [
    {
      urlPattern: new RegExp(`${path}/r/.+/$`),
      handler: 'fastest',
      options: {
        cache: {
          maxEntries: 100,
          name: `posts-cache-${version}`
        }
      }
    }, {
      urlPattern: new RegExp(`${path}/r/.*/comments/.+`),
      handler: 'fastest',
      options: {
        cache: {
          maxEntries: 30,
          name: `comments-cache-${version}`
        }
      }
    }, {
      urlPattern: new RegExp(`${path}/u/.+`),
      handler: 'fastest',
      options: {
        cache: {
          maxEntries: 30,
          name: `user-cache-${version}`
        }
      }
    }
  ],
  navigateFallback: 'index.html',
};